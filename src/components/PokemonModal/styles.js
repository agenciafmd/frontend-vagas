import styled from "@emotion/styled";
import { Button, Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Container = styled(Dialog)`
  @media (max-width: 900px) {
    & .MuiDialog-container {
      & .MuiPaper-root {
        width: 100%;
        max-width: 100%;
        overflow-y: hidden;
        height: auto;
        padding: 10px;
      }
    }
  }
`;

const StatImageContainer = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 900px) {
    flex: none;
    width: 50%;
  }

  @media (max-width: 505px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 0 0 200px;

  @media (max-width: 900px) {
    justify-content: center;
    width: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  @media (max-width: 505px) {
    margin-top: 15px;
    flex: none;
    width: 100% !important;
    max-width: 100%;
    min-width: 100%;
  }
`;

const StatDialogTitle = styled(DialogTitle)`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

const StatName = styled.span`
  margin-bottom: 15px;
  font-size: 32px;
  color: #3b4cca;
  font-weight: bold;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px #aaa;
`;

const StatValue = styled.span`
  margin-bottom: 15px;
  font-size: 80px;
  line-height: 80px;
  font-weight: bold;
  width: 100%;
  height: 100px;
  border-radius: 30px;
  padding-top: 20px;
  background-color: #3b4cca;
  color: #fff;

  @media (max-width: 520px) {
    height: 50px;
    font-size: 40px;
    line-height: 40px;
  }
`;

const StatEffort = styled.span`
  margin-bottom: 15px;
  font-size: 16px;
  text-align: center;
  color: #444;
`;

const StatDialogContent = styled(DialogContent)`
  width: 450px;
  display: flex;

  @media (max-width: 900px) {
    width: 100% !important;
    overflow-y: none;
    position: relative;
    padding: 0px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StatImage = styled.img`
  width: 100%;

  @media (max-width: 505px) {
    width: 150px;
    height: 150px;
  }
`;

const LogoImage = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 150px;

  @media (max-width: 505px) {
    width: 150px;
    height: 150px;
  }
`;

const CloseButton = styled(Button)`
  margin-top: 30px;
  padding: 20px 0px;
  text-transform: capitalize;
  background: #e9ff00;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  font-weight: bold;
  border-radius: 20px;
`;

export {
  Container,
  StatDialogTitle,
  StatContainer,
  StatImage,
  StatName,
  StatValue,
  StatEffort,
  StatDialogContent,
  StatImageContainer,
  LogoImage,
  CloseButton,
};
