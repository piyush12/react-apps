import { TopHeader } from "@/features/feedback/TopHeader";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { AddEditFormStyles } from "./feedbackStyles";
import AddIcon from "@/assets/feedback/shared/icon-new-feedback.svg";
import Image from "next/image";
import { AddEditForm } from "@/features/feedback/AddEditForm";
import Layout from "@/features/feedback/Layout";

function AddFeedback() {
  return (
    <Layout>
      <main className='wrapper'>
        <Container>
          <Row>
            <Col mdOffset={2} md={9}>
              <TopHeader />

              <AddEditFormStyles>
                <div className='icon'>
                  <Image src={AddIcon} alt='AddIcon' />
                </div>
                <header>Create New Feedback</header>
                <AddEditForm />
              </AddEditFormStyles>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default AddFeedback;
