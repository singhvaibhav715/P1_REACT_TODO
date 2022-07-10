import React, { useState } from "react";
import "../Styles/Card.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BiTimeFive } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
const TaskCard = () => {
  const [toggleLike, setToggleLike] = useState(false);

  const handleToggleLike = () => setToggleLike((curr) => !curr);

  return (
    <>
      <div className="card">
        <div className="card--heading">Develop React Applications</div>
        <div className="card--body">
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            deserunt doloremque quidem optio quam nesciunt voluptates placeat
            quo! Quis cupiditate porro sapiente corporis iure culpa eligendi
            inventore. Quos, alias assumenda. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iure non saepe labore consectetur quo,
            excepturi quia distinctio optio dolorem impedit autem placeat,
            libero molestias. Sint vitae mollitia ullam assumenda itaque.
          </p>
        </div>
        <div className="card--footer">
          {toggleLike ? (
            <FcLike
              style={{ cursor: "pointer" }}
              onClick={() => handleToggleLike()}
            />
          ) : (
            <FcLikePlaceholder
              style={{ cursor: "pointer" }}
              onClick={() => handleToggleLike()}
            />
          )}
          <MdDeleteOutline style={{ cursor: "pointer" }} />
          <BiTimeFive />
          <span className="card--lastupdate">{"29 July 2022 11:26 AM"}</span>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
