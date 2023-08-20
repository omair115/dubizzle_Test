import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import { useDispatch, useSelector } from "react-redux";
import { getGistPublicList } from "./data/redux/actions";
import { getGistState } from "../src/data/redux/selectors/index";
import { isEmpty } from "lodash";

const App = () => {
  const dispatch = useDispatch();
  const gistList = useSelector(getGistState);

  useEffect(() => {
    if (isEmpty(gistList))
    dispatch(getGistPublicList());
  }, []);

  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GistList gistList={gistList} />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
