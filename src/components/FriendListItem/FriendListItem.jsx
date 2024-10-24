import React from "react";
import clsx from "clsx"; 
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={clsx(css.friendItem)}>
      <img className={clsx(css.imgListFriend)} src={avatar} alt={`${name} avatar`} width="48" />
      <p className={clsx(css.nameListFriend)}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
      {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;