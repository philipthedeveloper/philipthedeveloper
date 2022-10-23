import React from "react";
import styled from "styled-components";

const LangCard = ({ data }) => {
  const { imgUrl, name } = data;
  return (
    <div style={styles.cont}>
      <div style={styles.languageCard}>
        <Image src={imgUrl} />
      </div>
      <p style={styles.name} id="langName">
        {name}
      </p>
    </div>
  );
};

const styles = {
  languageCard: {
    borderRadius: "15px",
    display: "flex",
    width: "120px",
    flexGrow: 0,
    minHeight: "120px",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181d28",
  },

  cont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  name: {
    fontVariant: "small-caps",
    fontSize: "0.65rem",
  },
};

const Image = styled.img``;

export default LangCard;
