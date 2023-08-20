import React from "react";
import Gist from "./Gist";
import FullScreenLoader from "./../components/Loader";
import { useSelector } from "react-redux";
import { gistLoadingState } from "../data/redux/selectors";
import { isEmpty } from "lodash";
import styled from "styled-components";

const GistList = ({ gistList }) => {
  const loading = useSelector(gistLoadingState);

  if (loading)
    return (
      <>
      <FullScreenLoader />
      </>
    );

  if (!loading && isEmpty(gistList))
    return (
      <>
      <CenteredText>No Gist Found !</CenteredText>
      </>
    );

  return (
    <div style={{ padding: "10px" }}>
      {gistList.map((gist) => (
        <Gist key={gist.id} gistList={gist} />
      ))}
    </div>
  );
};


const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: x-large;
  transform: translate(-50%, -50%);
`;

export default GistList;
