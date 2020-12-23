import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <div className="messagemeta">
            <p className="sentText pr-10 mb-0">{trimmedName}</p>
            <p className="sentText pr-10 m-0">{time}</p>
          </div>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <div className="messagemeta">
              <p className="sentText pr-10 mb-0">{user}</p>
              <p className="sentText pr-10 m-0">{time}</p>
            </div>
          </div>
        )
  );
}

export default Message;