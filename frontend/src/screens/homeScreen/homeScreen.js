import axios from "axios";
import FormData from "form-data";
import React, { useState } from "react";
import DropSpace from "../../component/dropSpace/dropSpace";
import "./homeScreen.css";

export default function HomeScreen() {
  const [result, setResult] = useState();

  async function sendfile(file) {
    setResult("Processing...")
    let data = new FormData();
    data.append("file", file, file.name);

    let response = await axios.post("http://localhost:5000/upload", data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    });
    console.log(response);
    setResult(response != undefined && response.data != undefined ? response.data.result : "");
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
