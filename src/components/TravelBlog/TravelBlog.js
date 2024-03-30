import React from "react";
import "./TravelBlog.css";

function TravelBlog({
  placeHeading,
  placeImg1,
  placeImg2,
  placeImg3,
  placeDescription,
}) {
  return (
    <div>
      <section>
        <div>
          <h3>{placeHeading}</h3>
        </div>
        <div>
          <img src={placeImg1} alt="place" />
          <img src={placeImg2} alt="place" />
          <img src={placeImg3} alt="place" />
        </div>
        <div>
          <p>{placeDescription}</p>
        </div>
      </section>
    </div>
  );
}

export default TravelBlog;
