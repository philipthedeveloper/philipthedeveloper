import React, { useEffect } from "react";
import "./MyService.css";
import Card from "./Card";
import { services } from "../data";

function MyService() {
  useEffect(() => {
    const serviceContainer = document.querySelectorAll(".card");
    window.addEventListener("scroll", (e) => {
      serviceContainer.forEach((image) => {
        let inViewPort = handleInViewPort(image);
        inViewPort
          ? image.classList.add("opacityToggler")
          : image.classList.remove("opacityToggler");
      });
    });

    function handleInViewPort(el) {
      let elPos = el.getBoundingClientRect();
      console.log(elPos.top, elPos.bottom);
      return (
        (elPos.top <= 0 && elPos.bottom >= -100) ||
        (elPos.top >= 0 && elPos.bottom <= window.innerHeight) ||
        (elPos.bottom >= window.innerHeight &&
          elPos.top <= window.innerHeight - 60)
      );
    }
  }, []);

  return (
    <div className="service_container" id="services">
      <div className="header">
        <p id="service">MY SERVICE</p>
        <p id="what_i_do">What I Do</p>
      </div>
      <div className="services_container">
        {services.map((service) => {
          return <Card info={service} key={service.name} />;
        })}
      </div>
    </div>
  );
}

export default MyService;
