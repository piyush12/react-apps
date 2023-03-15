import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Sidebar from "@/features/feedback/Sidebar";
import RightPanel from "@/features/feedback/RightPanel";
import Layout from "@/features/feedback/Layout";
import { ProductRequest } from "./feedback/interface";
import { useRouter } from "next/router";
import Filter from "@/features/feedback/Sidebar/Filter";
import Roadmap from "@/features/feedback/Sidebar/RoadMapBox";
import NoFeedback from "@/features/feedback/NoFeedback";
import SuggestionList from "@/features/feedback/SuggestionList";
import Link from "next/link";

interface IPObj {
  [k: string]: any;
}

const roadMapStatusCount = <T extends IPObj>(
  array: T[],
  status: string
): number => array.filter((item) => item.status === status).length;

export default function Feedback({
  suggestions,
}: {
  suggestions: ProductRequest[];
}) {
  const router = useRouter();
  const { query } = router;

  const productStatus = {
    planned: roadMapStatusCount(suggestions, "planned"),
    progress: roadMapStatusCount(suggestions, "in-progress"),
    live: roadMapStatusCount(suggestions, "live"),
  };

  const hasActiveSuggestions = suggestions.length > 0;
  const suggestionCount = suggestions.length;

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onSort = async (value: string) => {
    const sortProduct = await fetch(`/api/feedback`, {
      method: "POST",
      body: JSON.stringify({ sortBy: value }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await sortProduct.json();
    refreshData();
  };

  const handleFilterClick = async (val: string) => {
    router.push({
      pathname: "/feedback",
      query: { cat: val },
    });
  };

  const handleUpVote = async (params: number) => {};

  return (
    <Layout>
      <main className='wrapper'>
        <Container>
          <Row>
            <Col md={3}>
              <Sidebar>
                <Filter
                  onFilterClick={handleFilterClick}
                  query={query.cat || ""}
                />
                <Roadmap roadMapStatus={productStatus} />
              </Sidebar>
            </Col>

            <Col md={9}>
              <RightPanel count={suggestionCount} onSort={onSort}>
                {hasActiveSuggestions ? (
                  suggestions?.map((item) => {
                    return (
                      <Link
                        href={`/feedback/${item.id}`}
                        className='list-link'
                        key={item.id}
                      >
                        <SuggestionList
                          suggestion={item}

                          onUpVote={handleUpVote}
                        />
                      </Link>
                    );
                  })
                ) : (
                  <NoFeedback />
                )}
              </RightPanel>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { cat } = context.query;
  const response = await fetch(
    `${process.env.PRODUCT_FEEDBACK_API_ROUTE_URL}/api/feedback?cat=${
      cat || ""
    }`
  );

  const suggestions = await response.json();
  return {
    props: {
      suggestions: suggestions.productRequests,
    },
  };
}
