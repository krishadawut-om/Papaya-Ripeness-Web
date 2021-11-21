import React from "react";
import "./sampleImage.css";
import sampleImage1 from "../../images/sampleImage/sampleImage1.jpg";
import sampleImage2 from "../../images/sampleImage/sampleImage2.jpg";
import sampleImage3 from "../../images/sampleImage/sampleImage3.jpg";
import sampleImage4 from "../../images/sampleImage/sampleImage4.jpg";
import sampleImage5 from "../../images/sampleImage/sampleImage5.jpg";
import sampleImage6 from "../../images/sampleImage/sampleImage6.jpg";

export default function SampleImage() {
  return (
    <div>
      <p className="sampleText">
        No image ?<br />
        try one of this :
      </p>
      <div className="imageContainer">
        <img src={sampleImage1} width={50} height={50} />
        <img src={sampleImage2} width={50} height={50} />
        <img src={sampleImage3} width={50} height={50} />
        <img src={sampleImage4} width={50} height={50} />
        <img src={sampleImage5} width={50} height={50} />
        <img src={sampleImage6} width={50} height={50} />
      </div>
    </div>
  );
}
