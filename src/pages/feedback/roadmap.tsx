import Layout from "@/features/feedback/Layout";
import RoadMapRow from "@/features/feedback/RoadMapRow";
import { TopHeader } from "@/features/feedback/TopHeader";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";

function Roadmap() {
  return (
    <Layout>
      <main className='wrapper'>
        <Container>
          <Row>
            <Col md={12}>
              <TopHeader
                tagline='Roadmap'
                bgColor
                link='/feedback/add-feedback'
              />
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <RoadMapRow />
            </Col>
            <Col md={4}>
              <RoadMapRow />
            </Col>
            <Col md={4}>
              <RoadMapRow />
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default Roadmap;
