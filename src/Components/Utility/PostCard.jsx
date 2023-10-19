/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../assets/thumb1.png";
import { FaShare, FaRegCommentAlt } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const PostCard = ({ title, content, author, date, likes, comments, share }) => {
  return (
    <div className="bg-white my-2 p-2 rounded-lg">
      <div className="flex justify-start items-center">
        <div className="w-10 mx-1">
          <img
            className="w-full rounded-lg"
            src={thumb}
            alt=""
          />
        </div>
        <div className="mx-2">
          <p className="font-semibold my-1">{title}</p>
          <p className="text-sm text-gray-400">
            {author} • {date}
          </p>
        </div>
      </div>
      <p className="my-3">{content}</p>
      <div className="my-2 flex justify-between text-gray-500">
        <p className="flex items-center">
          <BiLike></BiLike> {likes}
        </p>
        <p>{comments} Comments</p>
      </div>
      <hr className="border border-black w-full my-3" />
      <div className="flex justify-start">
        <button className="mx-2 flex items-center gap-1">
          <BiLike></BiLike> Like
        </button>
        <button className="mx-2 flex items-center gap-1">
          <FaRegCommentAlt></FaRegCommentAlt> Comment
        </button>
        {share ? (
          <button className="mx-2 flex items-center gap-1">
            <FaShare></FaShare>Share
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostCard;
