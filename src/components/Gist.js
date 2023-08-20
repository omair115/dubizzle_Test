import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const Gist = ({ gistList }) => {
  const {
    owner,
    files,
    created_at: createdAt,
    updated_at: updatedAt,
    description,
    comments,
  } = gistList;

  const formatDate = (dates) => {
    const date = new Date(dates);
    return date.toLocaleDateString("en-US");
  };

    return (
      <Container>
        <Header>
          <LeftSection>
            <OwnerImage src={owner?.avatar_url} alt={owner?.login} />
            <OwnerName>{owner?.login}</OwnerName>
          </LeftSection>
          <RightSection>
            <Stat>
              <Octicon name="code" style={{color:"#0366d6"}}/>
              <StatText>
                {Object.keys(files).length}{" "}
                {Object.keys(files).length > 1 ? "Files" : "File"}
              </StatText>
            </Stat>
            <Stat>
              <Octicon name="repo-forked" style={{color:"#0366d6"}}/>
              <StatText>Forks</StatText>
            </Stat>
            <Stat>
              <Octicon name="comment" style={{color:"#0366d6"}}/>
              <StatText>Comments {comments}</StatText>
            </Stat>
            <Stat>
              <Octicon name="star" style={{color:"#0366d6"}}/>
              <StatText>Stars</StatText>
            </Stat>
          </RightSection>
        </Header>
        <Timestamps>
          <Timestamp>Created: {formatDate(createdAt)}</Timestamp>
          <Timestamp>Updated: {formatDate(updatedAt)}</Timestamp>
        </Timestamps>
        <Description>{description}</Description>
        <FilesList>
          {Object.keys(files).map((fileName) => (
            <File key={fileName}>
              <Octicon name="file-text" style={{paddingLeft:"5px"}}/>
              <FileName>{fileName}</FileName>
            </File>
          ))}
        </FilesList>
      </Container>
    );
  }


const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d3d3d3;
  padding: 16px;
  width: 50%;
  margin-bottom: 16px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const OwnerName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #0366d6;
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const StatText = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #0366d6;
`;

const Timestamps = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Timestamp = styled.p`
  font-size: 14px;
  color: #586069;
  margin-right: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const FilesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display:flex;
  flex-wrap: wrap; 
`;

const File = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0366d6;
  margin-bottom: 8px;
`;

const FileName = styled.a`
  margin-left: 8px;
  text-decoration: none;
  color: #0366d6;
`;

export default Gist;
