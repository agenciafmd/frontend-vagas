import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 257px;
  height: 319px;
  color: #ffffff;
  border-radius: 40px 40px 0px 0px;
  cursor: pointer;
  background-color: #000000;
  transition: background-color 300ms ease-out;

  :hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 197px;
  height: 197px;
`;

const TitleContainer = styled.div`
  margin-top: 9px;
`;

const Title = styled.strong`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
`;

export { Container, ImageContainer, Image, TitleContainer, Title };
