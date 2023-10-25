/* eslint-disable no-unused-vars */
import React from "react";
import PostCard from "../Utility/PostCard";
import { AiOutlinePlus } from "react-icons/ai";

const Forum = () => {
  const forumData = [
    {
      title: "JavaScript Frameworks",
      content: "Let's discuss the latest trends in JavaScript frameworks!",
      author: "WebDevExpert",
      date: "October 25, 2023",
      likes: 38,
      comments: 12,
      share: false,
    },
    {
      title: "Remote Work Tips",
      content:
        "Share your tips for staying productive while working from home.",
      author: "RemoteWorker123",
      date: "October 24, 2023",
      likes: 42,
      comments: 8,
      share: false,
    },
    {
      title: "Favorite Books",
      content: "What are your favorite books? Let's create a reading list!",
      author: "Bookworm101",
      date: "October 23, 2023",
      likes: 65,
      comments: 20,
      share: false,
    },
    {
      title: "Travel Recommendations",
      content: "Looking for travel recommendations. Where should I go next?",
      author: "WanderlustExplorer",
      date: "October 22, 2023",
      likes: 28,
      comments: 5,
      share: false,
    },
    {
      title: "Coding Challenges",
      content: "Challenge: Write a program to reverse a string in Python.",
      author: "CodeGeek",
      date: "October 21, 2023",
      likes: 19,
      comments: 7,
      share: false,
    },
    {
      title: "Healthy Recipes",
      content: "Share your favorite healthy recipes and cooking tips!",
      author: "HealthyChef",
      date: "October 20, 2023",
      likes: 34,
      comments: 15,
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
      </div>
      <div className="border bg-white flex items-center border-gray-700 w-[90%] mx-auto rounded-lg p-2">
        <input
          className="w-[92%] md:w-[92%] lg:w-[95%]"
          placeholder="Add new thread"
          type="text"
        />
        <button className="w-[8%] md:w-[8%] lg:w-[5%] text-center bg-[#f97365] p-2 rounded-lg text-white">
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </div>
      <div className="mt-5 w-[90%] mx-auto py-12">
        {forumData.map((forum) => (
          <PostCard
            key={forum.title}
            title={forum.title}
            content={forum.content}
            author={forum.author}
            date={forum.date}
            likes={forum.likes}
            comments={forum.comments}
            share={forum.share}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Forum;
