/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PostCard from "../Utility/PostCard";

const Group = () => {
  const groupPosts = [
    {
      title: "Hiking Adventures",
      content: "Share your recent hiking experiences and photos.",
      author: "OutdoorEnthusiast",
      date: "October 25, 2023",
      likes: 28,
      comments: 6,
      share: false,
    },
    {
      title: "Science and Technology News",
      content:
        "Stay updated with the latest advancements in science and technology.",
      author: "TechGeek",
      date: "October 24, 2023",
      likes: 45,
      comments: 12,
      share: false,
    },
    {
      title: "Book Club Discussion",
      content: "Let's discuss the book of the month and share our thoughts.",
      author: "BookwormClub",
      date: "October 23, 2023",
      likes: 36,
      comments: 8,
      share: false,
    },
    {
      title: "Cooking and Recipes",
      content: "Share your favorite recipes and cooking tips with the group.",
      author: "HomeChef",
      date: "October 22, 2023",
      likes: 19,
      comments: 5,
      share: false,
    },
  ];

  return (
    <div>
      <div className="flex my-2 px-10">
        <p className="subMenu font-bold mx-2 text-[#f97365] border-b-4 border-[#f97365]">
          Discussion
        </p>
        <p className="font-bold mx-2">Member</p>
        <p className="font-bold mx-2">Events</p>
      </div>
      <div className="border bg-white flex items-center border-gray-700 w-[90%] mx-auto rounded-lg p-2">
        <input
          className="w-[95%]"
          placeholder="Post Something"
          type="text"
        />
        <button className="w-[5%] text-center bg-[#f97365] p-2 rounded-lg text-white">
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </div>
      <div className="mt-5 w-[90%] mx-auto py-12">
        {groupPosts.map((post) => (
          <PostCard
            key={post.title}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
            likes={post.likes}
            comments={post.comments}
            share={post.share}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Group;
