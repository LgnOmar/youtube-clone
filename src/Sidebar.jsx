import React from "react";
import "./Sidebar.css";
import SidebarElement from "./SidebarElement";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarElement selected Icon={HomeIcon} title="Home" />
      <SidebarElement Icon={WhatshotIcon} title="Trending" />
      <SidebarElement Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarElement Icon={VideoLibraryIcon} title="Library" />
      <SidebarElement Icon={HistoryIcon} title="History" />
      <SidebarElement Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarElement Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarElement Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SidebarElement Icon={ExpandMoreOutlinedIcon} title="Show More" />
    </div>
  );
}

export default Sidebar;
