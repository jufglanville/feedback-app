"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  comment: FeedbackComment;
}

const CommentsCard = ({ comment }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="flex items-start gap-8 py-8">
        <Image
          src={`${comment.user.image}/${comment.user.id}`}
          alt={comment.user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="w-full">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-base">{comment.user.name}</h3>
              <p className="text-sm text-slate-500">{`@${comment.user.username}`}</p>
            </div>
            <h3
              onClick={handleClick}
              className="font-semibold text-sm text-blue-700 cursor-pointer hover:underline"
            >
              Reply
            </h3>
          </div>
          <p className="text-sm text-slate-500 font-regular mb-4">
            {comment.content}
          </p>
          {showForm && (
            <form className="flex items-start gap-4">
              <textarea
                className="w-full bg-slate-100 rounded-md p-5 text-sm text-slate-500 font-regular"
                placeholder="Type your reply here"
              />
              <button className="py-2 px-4 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300">
                Post&nbsp;Reply
              </button>
            </form>
          )}

          {/* Duplicate for Replies */}
          
          {comment.replies && comment.replies.map((reply) => (
            <div className="flex items-start gap-8 py-8">
              <Image
                src={`${reply.user.image}/${reply.user.id}`}
                alt={reply.user.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="w-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-base">
                      {reply.user.name}
                    </h3>
                    <p className="text-sm text-slate-500">{`@${reply.user.username}`}</p>
                  </div>
                  <h3
                    onClick={handleClick}
                    className="font-semibold text-sm text-blue-700 cursor-pointer hover:underline"
                  >
                    Reply
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-regular mb-4">
                  <span className="text-purple-600 font-bold mr-1">@{reply.replyingTo}</span>
                  {reply.content}
                </p>
                {showForm && (
                  <form className="flex items-start gap-4">
                    <textarea
                      className="w-full bg-slate-100 rounded-md p-5 text-sm text-slate-500 font-regular"
                      placeholder="Type your reply here"
                    />
                    <button className="py-2 px-4 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300">
                      Post&nbsp;Reply
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
