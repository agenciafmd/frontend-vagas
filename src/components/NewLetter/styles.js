import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const Container = styled.section`
  background-color: #000000;
  height: 228px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58.09px;
  color: #ffffff;
`;

const SubTitle = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 59px;
  line-height: 71.4px;
  color: #ffffff;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  width: 244px;
  height: 41px;
  margin: 0px 16px;
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

const ButtonContainer = styled.div``;

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
