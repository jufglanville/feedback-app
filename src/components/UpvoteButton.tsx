"use client";

import { useContext } from "react";
import { BiChevronUp } from "react-icons/bi";
import { Pill } from "./Pill";
import { UserContext } from "../context/UserContext";

interface Props {
  quantity: number;
  feedbackId: number;
}

const UpvoteButton = ({ quantity, feedbackId }: Props) => {
  const { user, setUser } = useContext(UserContext);

  let userUpvoted = user?.upvoted.includes(feedbackId);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!user) return;
    let newUpvoted = [];
    if (userUpvoted) {
      newUpvoted = user?.upvoted.filter((id) => id !== feedbackId);
    }
    else {
      newUpvoted = user?.upvoted.concat(feedbackId);
    }
    setUser({ ...user, upvoted: newUpvoted });
  };

  return (
      <Pill onClick={handleClick} selected={userUpvoted}>
        <div className="flex flex-col justify-center items-center py-1">
          <BiChevronUp className="text-2xl" />
          <p className={userUpvoted ? 'text-white' : 'text-black'}>{quantity}</p>
        </div>
      </Pill>
  );
};

export default UpvoteButton;
