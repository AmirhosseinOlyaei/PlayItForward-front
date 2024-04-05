import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const ActionButton = ( {linkTo, text, startIcon }) => {
  return (
    <>
      <Link href={linkTo}>
        <Button
          variant="contained"
          // color="primary"
          startIcon={startIcon}
          size="large"
          sx={{
            backgroundColor: "rgba(33, 150, 243, 0.8)", // Recommended color from Material-UI docs
            color: "white", margin: "10px 0", height: "42px",
            "&:hover": {
              backgroundColor: "rgba(33, 150, 243, 1)", // Recommended color from Material-UI docs
            },
            "& .MuiButton-startIcon": {
              color: "white",
            },
          }}
        >
          {text}
        </Button>
      </Link>
    </>
  );
};
export default ActionButton;