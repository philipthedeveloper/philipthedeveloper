import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <div className="form_group">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="form_group">
        <input
          type="text"
          name="Subject"
          id="Subject"
          placeholder="Enter Your Subject"
          required
        />
      </div>
      <div className="form_group">
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Enter Your Email"
          required
        />
      </div>
      <div className="form_group">
        <textarea
          name="message"
          id="message"
          placeholder="Enter Your Message"
        ></textarea>
      </div>
      <button>
        Send Message<i className="fa-solid fa-paper-plane"></i>
      </button>
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 60px auto;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 10px var(--black);
  border-radius: 0.5rem;

  .form_group {
    align-self: start;

    textarea {
      min-height: 200px;
      resize: none;
    }
  }

  input,
  textarea,
  button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    background-color: var(--shadow);
    color: #fff;
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
    background-color: var(--base-color);
  }
`;

export default ContactForm;
