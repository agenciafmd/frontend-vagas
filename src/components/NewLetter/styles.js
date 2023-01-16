import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const Container = styled.section`
  background-color: #000000;
  height: 228px;

  @media (max-width: 900px) {
    height: auto;
    padding-bottom: 48px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;

  @media (max-width: 1300px) {
    width: 1080px;
    max-width: 1080px;
    min-width: 1080px;
  }

  @media (max-width: 1080px) {
    width: 900px;
    max-width: 900px;
    min-width: 900px;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 0px 70px;
  }

  @media (max-width: 860px) {
    width: 100%;
    padding: 0px 50px;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 0px 15px;
  }
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58.09px;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 26px;
    line-height: 31px;
  }
`;

const SubTitle = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 59px;
  line-height: 71.4px;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding: 0px 70px;
  }

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 500px) {
    padding: 0px 15px;
  }
`;

const InputContainer = styled.div`
  width: 244px;
  height: 41px;
  margin: 0px 16px;

  @media (max-width: 900px) {
    width: 100% !important;
    margin: 16px 0px;
  }
`;

const Input = styled(TextField)`
  & label {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  & label.Mui-focused {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  & input {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  & .MuiInput-underline:after {
    border: 1px solid #e9ff00;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border: 1px solid #e9ff00;
      border-radius: 20px;
      height: 41px;
      padding: 4px;
    }

    &:hover fieldset {
      border: 1px solid #e9ff00;
    }

    &.Mui-focused fieldset {
      border: 1px solid #e9ff00;
    }
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 38px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 42px;
  background: #e9ff00;
  opacity: 0.5;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 250px;
    height: 50px;
  }

  @media (max-width: 624px) {
    width: 100%;
  }

  :hover {
    opacity: 1;
  }
`;

export {
  Container,
  Content,
  TitleContainer,
  FormContainer,
  Title,
  SubTitle,
  Input,
  InputContainer,
  ButtonContainer,
  Button,
};
