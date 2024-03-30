import React from "react";
import TravelData from "../../TravelData";
import "./TravelBlog.css";

function TravelBlog() {
  const { placeHeading, placeImg1, placeImg2, placeImg3, placeDescription } =
    TravelData[0];
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
