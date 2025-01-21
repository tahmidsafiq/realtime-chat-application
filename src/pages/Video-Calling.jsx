import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VideoCallingPage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div className="video-calling">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Video Calling Container */
          .video-calling {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f0f8ff;
            font-family: 'Arial', sans-serif;
            padding: 20px;
          }

          /* Heading */
          .video-calling h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
          }

          /* Input container with alignment */
          .input-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          /* Input field */
          .input {
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 220px;
            margin-right: 10px;
            transition: all 0.3s ease;
          }

          /* Input field focus effect */
          .input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          /* Button */
          .button {
            padding: 12px 25px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
          }

          /* Button hover effect */
          .button:hover {
            background-color: #0056b3;
          }

          /* Button disabled state */
          .button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        `}
      </style>
      <h1>Enter Video Call Room</h1>
      <div className="input-container">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
          className="input"
        />
        <button onClick={handleJoinRoom} className="button">
          Join
        </button>
      </div>
    </div>
  );
};

export default VideoCallingPage;
