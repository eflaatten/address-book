import React, { useState } from "react";

const ContactCard = ({user}) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => {
    let status = isHidden ? false : true;
    setIsHidden(status);
  };

  return (
    <div className={`contact-card ${!isHidden ? 'active' : ''}`} onClick={handleClick}>
      <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`}/>
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      {!isHidden && (
        <div className="extra-info">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Location: {`${user.location.city}, ${user.location.state}`}</p>
          <p>Age: {user.dob.age}</p>
        </div>
      )}
    </div>
  )
}

export default ContactCard;