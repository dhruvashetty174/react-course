import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  // const sender = props.sender;
  // const message = props.message;
  // const { message, sender } = props; // Destructure

  /*if(sender === "user"){
    return (
      <div>
        {message}
        <img src="./robot.png" width="50" />
      </div>
    );
  }*/

  return (
    <div
      className={
        sender === 'user'
          ? 'chat-message-user'
          : 'chat-message-robot'
      }
    >
      {sender === 'robot' && (
        <img className="robot-img" src={RobotProfileImage} />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img className="user-image" src={UserProfileImage} />
      )}
    </div>
  );
}