import React, { useCallback, useState } from "react";
import "./dropSpace.css";
import { ReactComponent as DropIcon } from "../../images/dropIcon.svg";
import Button from "../button/button";
import { ReactComponent as UploadIcon } from "../../images/uploadIcon.svg";
import { useDropzone } from "react-dropzone";

export default function DropSpace({ onDropFile, result }) {
  const [imgFile, setImgFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const objectUrl = URL.createObjectURL(file);
      onDropFile(file);
      setImgFile(objectUrl);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropSpaceContainer">
      <input {...getInputProps()} />
      {imgFile != undefined ? (
        <img src={imgFile} className="img" />
      ) : (
        <DropIcon />
      )}
      <div className="buttonTextContainer">
        <Button icon={UploadIcon}>Upload Image</Button>
        <p>or drop a file</p>
        <p>{result}</p>
      </div>
    </div>
  );
}
