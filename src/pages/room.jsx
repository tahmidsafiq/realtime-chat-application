import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  const myMeeting = async (element) => {
    const appID = 897607594;
    const serverSecret = "2a6c323333fdb9001793129026279f4e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Enter Your Name"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `${window.location.origin}/room/${roomId}`, // Dynamically set the base URL
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  useEffect(() => {
    if (meetingRef.current) {
      myMeeting(meetingRef.current);
    }
  }, [roomId]);

  return (
    <div>
      <div ref={meetingRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default Roompage;
