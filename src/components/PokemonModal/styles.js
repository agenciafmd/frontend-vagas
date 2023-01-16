import styled from "@emotion/styled";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// left column container
const StatImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

// right column container
const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 0 0 200px;
`;

// dialog's title
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
`;

const StatImage = styled.img`
  width: 100%;
`;

const LogoImage = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 150px;
`;

export {
  StatDialogTitle,
  StatContainer,
  StatImage,
  StatName,
  StatValue,
  StatEffort,
  StatDialogContent,
  StatImageContainer,
  LogoImage,
};
