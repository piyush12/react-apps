import React from "react";
import Layout from "@/features/feedback/Layout";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { AddEditFormStyles } from "../feedbackStyles";
import Image from "next/image";
import { AddEditForm } from "@/features/feedback/AddEditForm";
import EditIcon from "@/assets/feedback/shared/icon-edit-feedback.svg";
import { TopHeader } from "@/features/feedback/TopHeader";
import { ProductRequest } from "../interface";
import { useRouter } from "next/router";

function EditFeedback({ suggestion }: { suggestion: ProductRequest }) {
  const router = useRouter();

  const handleSubmit = async (formData: {
    ftitle: string;
    fcategory: string;
    fstatus: string;
    fdetail: string;
  }) => {
    if (formData.fdetail) {
      await fetch(`/api/feedback/editFeedback/${router.query.editFeedback}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push(`/feedback/${router.query.editFeedback}`);
    }
  };

  const handleCancel = () => {
    router.replace(`/feedback/${router.query.editFeedback}`);
  };

  return (
    <Layout>
      <main className='wrapper'>
        <Container>
          <Row>
            <Col mdOffset={2} md={9}>
              <TopHeader />

              <AddEditFormStyles>
                <div className='icon'>
                  <Image src={EditIcon} alt='Edit Icon' />
                </div>
                <header>Create New Feedback</header>
                <AddEditForm
                  onSubmit={handleSubmit}
                  isEdit={true}
                  title={suggestion.title}
                  detail={suggestion.description}
                  status={suggestion.status}
                  category={suggestion.category}
                  onCancel={handleCancel}
                />
              </AddEditFormStyles>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default EditFeedback;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps({
  params,
}: {
  params: { editFeedback: number };
}) {
  const { editFeedback } = params;

  const response = await fetch(
    `${process.env.PRODUCT_FEEDBACK_API_ROUTE_URL}/api/feedback/editFeedback/${editFeedback}`
  );

  const suggestion = await response.json();

  return {
    // Passed to the page component as props
    props: { suggestion },
  };
}
