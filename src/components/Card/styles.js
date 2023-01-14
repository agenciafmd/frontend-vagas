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
    background-image: url("${({ pokeImage }) => pokeImage}");
    background-size: 50%;
    background-position: 0 -30px;
    color: #000000;

    & > span {
      background: rgba(255, 255, 255, 0.7);
      transition: background-color 400ms ease-out;
    }
  }
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 197px;
  height: 197px;
`;

const TitleContainer = styled.span`
  padding: 0 5px;
  margin-top: 9px;
`;

const Title = styled.strong`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
`;

export { Container, ImageContainer, Image, TitleContainer, Title };
