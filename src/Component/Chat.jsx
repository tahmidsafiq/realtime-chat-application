import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for checking the current route
import Cam from '../assets/images/cam.png';
import More from '../assets/images/more.png';
import Add from '../assets/images/add.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  const userPhotoURL = data.user?.photoURL;

  // Get the current location
  const location = useLocation();

  // Botpress script integration
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/01/15/18/20250115182802-PMJSOLEW.js';
    script2.async = true;
    document.body.appendChild(script2);

    script1.onload = () => {
      window.botpressWebChat.init({
        botId: 'your-bot-id', // Replace with your actual Bot ID
        hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
        botName: 'My Bot',
        botAvatarUrl: 'https://link-to-your-avatar.png',
        backgroundColor: '#ffffff',
      });
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

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
        <Link  to="/join-meetting" className="fixed-btn">
    Create a Meeting
  </Link>
          <Link to="/join-meetting" ><img src={Cam} alt="Camera Icon" /></Link>
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
