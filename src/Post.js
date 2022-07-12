import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpOutlinedIcon} color="gray" />
        <InputOption title="Comment" Icon={ChatOutlinedIcon} color="gray" />
        <InputOption title="Share" Icon={ShareOutlinedIcon} color="gray" />
        <InputOption title="Send" Icon={SendOutlinedIcon} color="gray" />
      </div>
    </div>
  );
});

export default Post;
