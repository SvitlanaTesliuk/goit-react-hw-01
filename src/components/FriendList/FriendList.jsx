import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem"; 
import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;