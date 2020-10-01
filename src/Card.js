import React from "react";

const Card = () => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src="https://robohash.org/kikuk?200x200" alt="robots" />
      <div>
        <h2>Jane doe</h2>
        <p>janedoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
