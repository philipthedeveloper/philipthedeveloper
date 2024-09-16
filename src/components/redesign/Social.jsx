import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <div className="fixed top-0 left-[8%] md:left-[4%] h-auto w-6 md:flex flex-col items-center gap-4 z-30 hidden">
      <div className="w-[2px] h-24 md:h-44 bg-[#f5f5f5]"></div>
      <div className="flex flex-col items-center gap-4">
        <SocialLink
          href="https://github.com/philipthedeveloper"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <i className="fa-brands text-2xl md:text-3xl fa-github"></i>
        </SocialLink>
        <SocialLink
          href="https://twitter.com/POwolabi55029"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa-brands text-2xl md:text-3xl fa-twitter"></i>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/philipthedeveloper"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa-brands text-2xl md:text-3xl fa-linkedin-in"></i>
        </SocialLink>
        <SocialLink
          href="https://instagram.com/philipthedeveloper?igshid=anh1MGp6emNvZ3Zo"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa-brands text-2xl md:text-3xl fa-instagram"></i>
        </SocialLink>
      </div>
    </div>
  );
};

const SocialLink = styled.a`
  color: #ffffff;
  transition: 0.4s ease;

  &:hover {
    color: #2ca4fb;
  }
`;

export default Social;
