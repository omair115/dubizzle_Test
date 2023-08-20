import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import useDebounce from "../data/hooks/useDebounce";
import {
  getGistListByUsername,
  setGistList
} from "../data/redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { gistCacheListState } from "../data/redux/selectors/index";

const Search = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const name = useDebounce(username, 500);
  const gistListCache = useSelector(gistCacheListState);

  useEffect(() => {
    if (!isEmpty(username)) {
      dispatch(getGistListByUsername(name));
    } 
    if (isEmpty(username) && !isEmpty(gistListCache)) {
      dispatch(setGistList(gistListCache));
    }
  }, [name]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          type="text"
          placeholder="Search Gists for the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
