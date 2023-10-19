/* eslint-disable no-unused-vars */
import React from "react";
import PostCard from "../../Utility/PostCard";

const Feeds = () => {
  const posts = [
    {
      id: 6,
      title: "Exciting News Announcement",
      content: "We have some exciting news to share with you!",
      author: "Marketing Team",
      date: "October 20, 2023",
      likes: 120,
      comments: 25,
      share: true,
    },
    {
      id: 5,
      title: "Recipe of the Day",
      content: "Learn how to make the most delicious chocolate chip cookies.",
      author: "Chef Emily",
      date: "October 19, 2023",
      likes: 85,
      comments: 12,
      share: true,
    },
    {
      id: 4,
      title: "Upcoming Event",
      content: "Join us for our annual charity gala this Saturday!",
      author: "Event Committee",
      date: "October 21, 2023",
      likes: 62,
      comments: 8,
      share: true,
    },
    {
      id: 3,
      title: "Tech News",
      content: "Exciting advancements in AI and machine learning technologies.",
      author: "Tech Enthusiast",
      date: "October 18, 2023",
      likes: 95,
      comments: 18,
      share: true,
    },
    {
      id: 2,
      title: "Healthy Living Tips",
      content:
        "Discover how to maintain a healthy lifestyle through exercise and nutrition.",
      author: "Wellness Coach",
      date: "October 17, 2023",
      likes: 72,
      comments: 14,
      share: true,
    },
    {
      id: 1,
      title: "Nature Photography",
      content: "Enjoy the beauty of nature through these stunning photographs.",
      author: "Photographer John",
      date: "October 16, 2023",
      likes: 55,
      comments: 10,
      share: true,
    },
  ];
  return (
    <div className="mt-5 text-justify">
      <p className="font-semibold">Feeds</p>
      <div className="mt-5">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            share={post.share}
            likes={post.likes}
            comments={post.comments}
            author={post.author}
            date={post.date}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
