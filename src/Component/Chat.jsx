import React, { useContext } from 'react';
import Cam from '../assets/images/cam.png';
import More from '../assets/images/more.png';
import Add from '../assets/images/add.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  const userPhotoURL = data.user?.photoURL;

  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className='chatProfile'>
        {userPhotoURL ? (
          <img src={userPhotoURL} alt="User Photo" />
        ) : (
          <img style={{ display: "none" }} src={userPhotoURL} alt="User Photo" />
        )}
        <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <img src={Cam} alt="Camera Icon" />
          <img src={Add} alt="Add Icon" />
          <img src={More} alt="More Icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
