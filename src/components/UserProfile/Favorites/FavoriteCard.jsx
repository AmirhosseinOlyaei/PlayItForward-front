import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./UserProfile.module.css";
import { ButtonGroup, Divider, Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import ActionButton from "../ActionButton";
import { useNavigate } from "react-router-dom";

export default function FavoriteCard({
  toy,
  toyId,
  deleteFromFavorite,
  favToyId,
}) {
  const navigate = useNavigate(); // Create an instance of navigate
  const handleClick = () => {
    navigate(`/toys/${toyId}`);
  };
  return (
    <Card sx={{ maxWidth: 845, padding: "20px", margin: "20px" }}>
      <Typography
        variant="body1"
        color={
          toy.status === "available"
            ? "green"
            : toy.status === "reserved"
            ? "blue"
            : "red"
        }
        sx={{ mb: 2, textAlign: "right", fontWeight: "bold" }}
      >
        {toy.status}
      </Typography>

      <div className={styles.detailsRow}>
        <CardMedia
          onClick={handleClick}
          component="img"
          alt="No picture"
          sx={{ width: "160px", height: "186px", mr: 2 }}
          image={toy.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {toy.title}
          </Typography>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Typography variant="body2">
                <b>Category</b>
              </Typography>
            </div>
            <div>
              <Typography variant="body2">{toy.category}</Typography>
            </div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Typography variant="body2">
                <b>Condition</b>
              </Typography>
            </div>
            <div>
              <Typography variant="body2">{toy.condition}</Typography>
            </div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Typography variant="body2">
                <b>Description</b>
              </Typography>
            </div>
            <div>
              <Typography variant="body2">{toy.description}</Typography>
            </div>
          </div>
          <div>
            <Box
              sx={{
                margin: "5px 0",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "327px",
                minWidth: "327px",
                mt: 2,
              }}
            >
              <ActionButton
                link=""
                text="Delete from Favorites"
                onClick={() => deleteFromFavorite(favToyId)}
              />
              <ActionButton
                link={`/messages?id=${toy._id}`}
                text=""
                startIcon={<MailIcon />}
              />
            </Box>
          </div>
        </CardContent>
      </div>

      {/* <ActionButton link="" text="" startIcon={<ShareIcon />} /> */}
    </Card>
  );
}
