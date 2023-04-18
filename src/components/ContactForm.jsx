import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const ContactForm = ({ showProcessModal, hideProcess }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length < 3) {
      return toast.error("Name too short!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (subject.length < 4) {
      return toast.error("Subject too short! Minimun of 4 characters.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (!email) {
      return toast.error("Provide a valid email!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (!validateEmail(email)) {
        return toast.error("Provide a valid email!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    if (!message || message.length < 20) {
      return toast.info("Please provide a message (Min 20 characters) ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const newMessage = { name, subject, email, message };
    let options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(newMessage),
      headers: { "Content-Type": "application/json" },
    };

    showProcessModal();
    return;
    let response = await fetch(
      "https://philipthdeveloper-backend.onrender.com",
      options
    );
    let responseText = await response.json();
    hideProcess();
    if (responseText.status !== 200) {
      return toast.error("An error occured! Please try again.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    return toast.success("Email submitted successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: true,
    });
  };

  return (
    <Form>
      <div className="form_group">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form_group">
        <input
          type="text"
          name="Subject"
          id="Subject"
          placeholder="Enter Your Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form_group">
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form_group">
        <textarea
          name="message"
          id="message"
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button onClick={(e) => handleSubmit(e)}>
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
    font-family: inherit;
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
