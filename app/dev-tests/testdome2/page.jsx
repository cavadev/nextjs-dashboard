"use client"
import {useState} from 'react';

export default function Message () {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e) => {
    setShowMessage(!showMessage);
    e.preventDefault();
  };
  return (
    <div>
      <a href="#" onClick={handleClick}>Want to buy a new car?</a>
      {showMessage && <p>Call +11 22 33 44 now!</p>}
    </div>
  );
};
