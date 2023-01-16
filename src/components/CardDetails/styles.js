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

    & > span {
      transition: background-color 400ms ease-out;
      color: #000000;
    }
    & > div > span {
      transition: background-color 400ms ease-out;
      color: #000000;
    }
  }

  @media (max-width: 624px) {
    width: 100%;
    height: 213px;
  }
`;

const TitleContainer = styled.div``;

const Title = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  text-transform: capitalize;
`;

const Label = styled.span`
  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
  text-transform: capitalize;
`;

const ImageContainer = styled.div``;

const Image = styled.img``;

export { Container, ImageContainer, Image, TitleContainer, Title, Label };
