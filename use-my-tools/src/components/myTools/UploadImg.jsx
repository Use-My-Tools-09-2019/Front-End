import React, { useState } from "react";

import ImageUploader from "react-images-upload";

//styles
import * as color from "../../styles/color";
import * as styled from "../styled-components/general";

//redux
import { useDispatch } from "react-redux";
import { uploadImage } from "../../store/actions";

export default function UploadImg({ tool }) {
  const dispatch = useDispatch();
  //image state
  const [picture, setPicture] = useState([]);
  const onDrop = (picture) => {
    setPicture(picture);
  };
  return (
    <>
      <ImageUploader
        singleImage={true}
        withIcon={true}
        buttonText="Choose image"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
        fileContainerStyle={{
          background: color.cardBackground,
          width: "200px",
          height: "200px",
        }}
      />
      {picture.length > 0 ? (
        <>
          <p>File Name: {picture[0].name}</p>
          <styled.Button
            w={"10rem"}
            h={"3rem"}
            onClick={() => {
              dispatch(uploadImage(picture[0], tool));
            }}
          >
            Upload
          </styled.Button>
        </>
      ) : (
        <span></span>
      )}
    </>
  );
}
