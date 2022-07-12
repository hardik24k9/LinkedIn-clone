/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css";
import { useSelector } from "react-redux";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  /* establishing connection to the firebase */
  useEffect(() => {
    db.collection("posts")
      .orderBy(
        "timestamp",
        "desc"
      ) /* orderby is used to all feed posts according to most recent ones */
      .onSnapshot((snapshot) => {
        /* onSnapshot is a real time event listener */
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      {/* Input Container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        {/* User Post Options */}

        <div className="feed__inputOptions">
          {/* InputOption */}
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
          <InputOption
            title="Write"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts Container */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={
              id
            } /* key is used so that react only re-renders the unique element added in the list */
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
