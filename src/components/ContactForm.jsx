import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "./form/FormInput";
import Loader from "./form/Loader";
import axios from "axios";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm = ({ showProcessModal, hideProcess }) => {
  const [submitting, setSubmitting] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: "",
      subject: "",
      email: "",
      message: "",
    }),
    []
  );

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Please provide your name")
      .min(2, "Name is too short"),
    subject: yup
      .string()
      .required("Please provide subject")
      .min(4, "Minimum of 4 characters"),
    email: yup
      .string()
      .required("Please provide your email")
      .matches(emailRegex, "Enter a valid email"),
    message: yup.string().required("Please provide your message"),
  });

  const validation = useFormik({
    enableReinitialize: false,
    initialValues: defaultValues,
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const { handleBlur, handleChange, resetForm } = validation;

  const submitForm = async (values) => {
    try {
      setSubmitting(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}`,
        values
      );
      resetForm();
      return toast.success("Email submitted successfully");
    } catch (error) {
      return toast.error("An error occured! Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        validation.handleSubmit();
      }}
    >
      {submitting && <Loader />}
      <FormInput
        type={"text"}
        name={"name"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={validation.values.name || ""}
        placeholder={"Enter your name"}
        validation={validation}
        maxLength={45}
        id="name"
      />
      <FormInput
        type={"text"}
        name={"subject"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={validation.values.subject || ""}
        placeholder={"Provide subject"}
        validation={validation}
        maxLength={80}
        id="subject"
      />
      <FormInput
        type={"text"}
        name={"email"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={validation.values.email || ""}
        placeholder={"Provide your email"}
        validation={validation}
        maxLength={80}
        id="email"
      />
      <FormInput
        type={"textarea"}
        name={"message"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={validation.values.message || ""}
        placeholder={"Enter your message here..."}
        validation={validation}
        maxLength={800}
        id="message"
      />
      <button type="submit">
        Send Message<i className="fa-solid fa-paper-plane"></i>
      </button>
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 60px 1fr auto;
  gap: 1.8rem 1rem;
  background-color: var(--main-background);
  border-radius: 0.5rem;
  position: relative;

  .form_group {
    textarea {
      min-height: 200px;
      resize: none;
      height: 100%;
    }
  }

  input,
  textarea,
  button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
    background-color: #101010;
    border: 1px solid #1c1c1c;
    color: #fff;
    font-family: inherit;
  }

  button {
    background: var(--base-color);
    transition: 0.4s ease;
  }

  .form_group:first-child,
  .form_group:nth-last-child(2),
  button {
    grid-column: 1/ 3;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    .form_group {
      align-self: stretch;
    }
  }

  i {
    margin-left: 0.5rem;
  }

  button {
    align-self: end;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--black);
  }
`;

export default ContactForm;
