import React from "react";
import Avatar from "@mui/material/Avatar";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="VideoCard">
      <img className="VideoCard-thumbnail" src={image} alt="" />
      <div className="VideoCard-info">
        <Avatar className="VideoCard-avatar" alt={channel} src={channelImage} />
        <div className="VideoCard-text">
            <h2>test</h2>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} + {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
