import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  listItemButtonClasses,
} from "@mui/material/ListItemButton";
import SearchMessage from "./SearchMessage";
import BackgroundLetterAvatars from "./Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";

const loggedInUserId = "6609a2873eaffef95345b9fa";

export default function Mails({
  index,
  onSearchChange,
  filteredMessages,
  onMessageSelect,
}) {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unread = filteredMessages.filter(
      (message) => !message.read && message.user_id_to?._id === loggedInUserId
    ).length;
    setUnreadCount(unread);
  }, [filteredMessages]);

  const handleMessageSelect = (message, index) => {
    const updatedMessages = [...filteredMessages];
    updatedMessages[index].read = true;
    // onMessageSelect(message);
    onMessageSelect(updatedMessages[index]);
    setUnreadCount((prevCount) => Math.max(prevCount - 1, 0));
    setSelectedMessageIndex(index);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        minHeight: 600,
        borderRadius: "sm",
        p: 2,
        mb: 3,
        mt: 8,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <SearchMessage onSearchChange={onSearchChange} />
        {unreadCount > 0 && (
          <IconButton
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              "& .MuiIconButton-label": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              "& .MuiBadge-root": {
                marginTop: "-8px",
              },
            }}
          >
            <Badge badgeContent={unreadCount} color="secondary">
              <MailIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            </Badge>
          </IconButton>
        )}
      </Box>
      <Box sx={{ bgcolor: "background.paper", p: 0 }}>
        <List
          sx={{
            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
              {
                borderLeft: "2px solid",
                borderLeftColor: "var(--joy-palette-primary-outlinedBorder)",
              },
          }}
        >
          {filteredMessages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem index={index}>
                <ListItemButton
                  onClick={() => handleMessageSelect(message, index)}
                  selected={selectedMessageIndex === index}
                  sx={{
                    p: 2,
                    backgroundColor:
                      selectedMessageIndex === index
                        ? "var(--joy-palette-primary-selected)"
                        : "inherit",
                  }}
                >
                  <Divider sx={{ alignSelf: "flex-start" }}>
                    <BackgroundLetterAvatars
                      firstName={message.user_id_from.first_name}
                      lastName={message.user_id_from.last_name}
                    />
                  </Divider>
                  <Box sx={{ pl: 2, width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Typography level="body-xs">
                          {message.user_id_from.first_name}{" "}
                          {message.user_id_from.last_name}
                        </Typography>
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "99px",
                            bgcolor: message.color,
                          }}
                        />
                      </Box>
                      <Typography level="body-xs">
                        {new Date(message.sent_date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <div>
                      <Typography level="title-sm" sx={{ mb: 0.5 }}>
                        {message.subject}
                      </Typography>
                      <Typography level="body-sm">
                        <div
                          dangerouslySetInnerHTML={{ __html: message.content }}
                        />
                      </Typography>
                    </div>
                  </Box>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ m: 0 }} />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Paper>
  );
}
