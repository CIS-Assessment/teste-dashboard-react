import { Box, Typography } from "@mui/material";
import { useChecked } from "../../App";
import { TitleArea } from "../Header/style";

const Header = () => {
  const { checked }: any = useChecked();

  const today = new Date();
  const nowDate = today.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <TitleArea>
      <Box className="header" sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="h3" component="div" gutterBottom>
          Todo-list
        </Typography>
        <span className="date">{nowDate}</span>
        <br />
        <label className="checkbox-container">
          <span>Você concluiu {checked} de suas atividades</span>
        </label>
      </Box>
    </TitleArea>
  );
};

export default Header;
