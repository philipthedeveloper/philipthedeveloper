import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { checkInViewPort } from "./utils/index.util";

const handleWindowScroll = () => {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((image) => {
    let inViewPort = checkInViewPort(image);
    inViewPort ? image.classList.add("opacityToggler") : void 0;
    // : image.classList.remove("opacityToggler");
  });
};

function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
