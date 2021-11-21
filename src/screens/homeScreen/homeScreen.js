import axios from "axios";
import FormData from "form-data";
import React, { useState } from "react";
import DropSpace from "../../component/dropSpace/dropSpace";
import "./homeScreen.css";

export default function HomeScreen() {
  const [result, setResult] = useState();

  async function sendfile(file) {
    let data = new FormData();
    data.append("file", file, file.name);

    let result = await axios.post("https://dev.joinsport.co/api/File", data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    });
    console.log(result);
    setResult(result.data.toString());
  }

  return (
    <div className="homeScreenBg">
      <div className="image" />
      <div className="bodyContainer">
        <div className="centerBody">
          <div className="titleContainer">
            <p className="titleLine1">PAPAYA</p>
            <p className="titleLine2">RIPENESS CLASSIFICATION</p>
          </div>
          <DropSpace onDropFile={(e) => sendfile(e)} result={result} />

          {/* <SampleImage /> */}
        </div>
      </div>
    </div>
  );
}
