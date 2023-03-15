import React, { useState } from "react";
import styled from "styled-components";
import FButton from "../FeedbackButton/FButton";
import { TextArea } from "../FormElements";
import {
  SelectField,
  SelectFieldList,
  SelectFieldOption,
} from "../FormElements/Select";
import TextField from "../FormElements/TextField";

const statusObj: { [x: string]: string } = {
  planned: "Planned",
  live: "Live",
  "in-progress": "In-Progress",
};

const featureObj: { [x: string]: string } = {
  ui: "UI",
  ux: "UX",
  enhancement: "Enhancement",
  bug: "Bug",
  feature: "Feature",
};

function AddEditForm({
  isEdit = true,
  onSubmit,
  title,
  category,
  status,
  detail,
  onCancel,
}: {
  isEdit: boolean;
  onSubmit: ({
    ftitle,
    fcategory,
    fstatus,
    fdetail,
  }: {
    ftitle: string;
    fcategory: string;
    fstatus: string;
    fdetail: string;
  }) => void;

  title: string;
  category: string;
  status: string;
  detail: string;
  onCancel: () => void;
}) {
  const [ftitle, setTitle] = useState(title);
  const [fcategory, setCategory] = useState(category);
  const [fstatus, setStatus] = useState(status);
  const [fdetail, setDetail] = useState(detail);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ ftitle, fcategory, fstatus, fdetail });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormRowStyles>
        <TextField
          label='Feedback Title'
          description='Add a short, descriptive headline'
          id='feedbackTitle'
          value={ftitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          name='title'
        />
      </FormRowStyles>

      <FormRowStyles>
        <SelectField
          label='Category'
          description='Choose a category for your feedback'
          defaultValue='Select Category'
          value={fcategory}
          onChange={setCategory}
          name='category'
        >
          <SelectFieldList>
            {Object.keys(featureObj).map((category) => {
              return (
                <SelectFieldOption value={category} key={category}>
                  {featureObj[category]}
                </SelectFieldOption>
              );
            })}
          </SelectFieldList>
        </SelectField>
      </FormRowStyles>

      <FormRowStyles>
        <SelectField
          label='Update Status'
          description='Change feature state'
          //   value='Feature'
          defaultValue='Select Status'
          value={fstatus}
          onChange={setStatus}
          name='status'
        >
          <SelectFieldList>
            {Object.keys(statusObj).map((status) => {
              return (
                <SelectFieldOption value={status} key={status}>
                  {statusObj[status]}
                </SelectFieldOption>
              );
            })}
          </SelectFieldList>
        </SelectField>
      </FormRowStyles>

      <FormRowStyles>
        <TextArea
          label='Feedback Detail'
          description='Include any specific comments on what should be improved, added, etc.'
          rows='4'
          id='feedbackDetail'
          value={fdetail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDetail(event.target.value)
          }
          name='detail'
        />
      </FormRowStyles>

      <FormFooter>
        <div
          style={{
            marginRight: "auto",
          }}
        >
          {isEdit && <FButton className='delete-button'>Delete</FButton>}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <FButton variant='secondary' className='cancel' onClick={onCancel}>
            Cancel
          </FButton>
          <FButton variant='primary'>
            {isEdit ? "Save Changes" : "Add Feedback"}
          </FButton>
        </div>
      </FormFooter>
    </form>
  );
}

export default AddEditForm;

const FormRowStyles = styled.div`
  margin-bottom: 24px;
`;

const FormFooter = styled.footer`
  display: flex;
  gap: 16px;

  .cancel {
    background-color: var(--feedback-gray-blue-600);

    &:hover {
      background-color: var(--feedback-gray-blue-600-hover);
    }
  }
  .delete-button {
    background-color: var(--feedback-danger-variant);
    color: var(--white);
  }
`;
