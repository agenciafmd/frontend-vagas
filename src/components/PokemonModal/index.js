import Dialog from "@mui/material/Dialog";
import {
  StatName,
  StatValue,
  StatEffort,
  StatContainer,
  StatDialogContent,
  StatImageContainer,
  StatImage,
  StatDialogTitle,
  LogoImage,
} from "./styles";

function PokemonModal({
  open,
  onClose,
  name,
  image,
  base_stat,
  effort,
  statName,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <StatDialogTitle>{name}</StatDialogTitle>
      <StatDialogContent>
        <StatImageContainer>
          <StatImage src={image} />
          <LogoImage
            src="https://pokedex-elian.vercel.app/static/media/logo.dcfc2f6eedc47368eaceaf1309d054c5.svg"
            alt="Pokemon"
          />
        </StatImageContainer>
        <StatContainer>
          <StatName>{statName}</StatName>
          <StatValue>{base_stat}</StatValue>
          <StatEffort>Effort: {effort}</StatEffort>
        </StatContainer>
      </StatDialogContent>
    </Dialog>
  );
}

export default PokemonModal;
