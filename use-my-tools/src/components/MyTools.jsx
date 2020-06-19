import React, { useState, useEffect } from "react";

//styles
import * as styled from "./styled-components/myTools";
import * as cardStyles from "./styled-components/toolCard";

import * as color from "../styles/color";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getUserTools } from "../store/actions";

// components
import AddTool from "./AddTool";
import Loader from "react-loader-spinner";
import ImageUploader from "react-images-upload";
import UpdateToolModal from "./UpdateToolModal";
import DeleteTool from "./DeleteTool";

const MyTools = () => {
  //redux hooks
  const userTools = useSelector((state) => state.tools.userTools);
  const status = useSelector((state) => state.tools.status);
  const dispatch = useDispatch();

  //add tool modal
  const [modal, setModal] = useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };


  //side effects
  useEffect(() => {
    dispatch(getUserTools());
  }, []);

  //spinner logic
  if (status) {
    return (
      <div>
        <br />
        <Loader type="Oval" color={color.spinner} height={100} width={100} />
      </div>
    );
  }

  return (
    <>
      <br />
      <AddTool
        handleModalClose={handleModalClose}
        handleModalOpen={handleModalOpen}
        modal={modal}
      />
      <styled.ContainerDiv>
        {/* Mapping over tools for the user, adding new card for each input */}
        {userTools.map((tool) => (
          <cardStyles.Card>
            <cardStyles.ToolContent>

              <styled.ButtonDiv>
                <DeleteTool tool={tool} />
                <UpdateToolModal tool={tool} />
              </styled.ButtonDiv>

              <cardStyles.ToolTitle>{tool.tool_name}</cardStyles.ToolTitle>
              {tool.img_url === null ? (
                <>
                  <ImageUploader
                    withIcon={true}
                    buttonText="Choose image"
                    onChange={null}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    fileContainerStyle={{
                      background: color.cardBackground,
                    }}
                  />
                  <styled.ImgHr />
                </>
              ) : (
                <img src={tool.img_url} />
              )}
              <h4>Type: {tool.tool_type}</h4>
              <h4>Tool Description: {tool.tool_description}</h4>
              <h4>Tool Price: ${tool.rental_cost}</h4>
            </cardStyles.ToolContent>
          </cardStyles.Card>
        ))}
      </styled.ContainerDiv>
    </>
  );
};

export default MyTools;
