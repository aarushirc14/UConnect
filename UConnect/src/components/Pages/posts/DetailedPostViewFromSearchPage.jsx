// src/components/pages/posts/DetailedPostViewFromSearchPage.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Suspense, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
const EmojiPicker = React.lazy(() => import("emoji-picker-react")); //chunk larger imports for build
//import EmojiPicker from "emoji-picker-react";
import {
  FaSmile,
  FaPaperPlane,
} from "react-icons/fa";

import sofiaMartinez from "../../../assets/profilePics/sofiaMartinez.jpg";
import rashidaWilliams from "../../../assets/profilePics/rashidaWilliams.jpeg";
import jaredAllen from "../../../assets/profilePics/jaredAllen.jpg";
import leoCarter from "../../../assets/profilePics/leoCarter.jpg";
import simonMann from "../../../assets/profilePics/simonMann.jpg";
import saulAlvarez from "../../../assets/profilePics/saulAlvarez.jpg";
import davidSingh from "../../../assets/profilePics/davidSingh.jpg";
import leoCarterPost from "../../../assets/profilePics/leoCarterPost.webp";


// Define the Poster
const poster = {
    name: "Leo Carter",
    title: "Call For MATH 211 Study Group ",
    content: (
      <div className="mt-2.5">
        <p className="mb-6">
            Hey everyone! I am a new student at UofC and I am currently looking for other students who are interested in joining a study group for MATH 211.
        </p>
        <div className="flex items-center justify-center">
          <img src={leoCarterPost} className="max-w-xl"></img>
        </div>
      </div>
  ),
    image: leoCarter,
    time: "Today - 2:59 pm",
    likes: 12,
    dislike: 2,
};

// Define the Current User
const currentUser = {
  name: "Sofia Martinez",
  image: sofiaMartinez,
};

// Define the commentators array
const commentedusers = [
  {
    id: 1,
    name: "Rashida Williams",
    comment: (
      <div>
        <p>
        Hi Leo, welcome to UofC! I’m interested in joining the study group. </p>
        <p>Are you focusing on specific topics or just general study sessions?</p>
      </div>
      ),
    image: rashidaWilliams,
    time: "15 mins ago",
    likeStatus: "inactive",
    likes: 1,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
  {
    id: 2,
    name: "Jared Allen",
    comment: "Hi Leo! I’m currently taking the course too, and I’d be happy to join the group. Do you prefer meeting online or on campus?",
    image: jaredAllen,
    time: "30 mins ago",
    likeStatus: "inactive",
    likes: 0,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
  {
    id: 3,
    name: "Simon Mann",
    comment:(
        <div>
        <p>
        Welcome Leo! I see that we share the same major! I’ve taken that course before and would be happy to help out. </p>
        <p>Feel free to reach out if you need tips or resources for the course or your major in general! </p>
        </div>
      ),
    image: simonMann,
    time: "47 mins ago",
    likeStatus: "inactive",
    likes: 8,
    dislikeStatus: "inactive",
    dislikes: 2,
  },
  {
    id: 4,
    name: "Saul Alvarez",
    comment: "I'm in that course too and would be interested to join a study group for it. Message me if you found a group and want me in!",
    image: saulAlvarez,
    time: "2 hours ago",
    likeStatus: "inactive",
    likes: 1,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
  {
    id: 5,
    name: "David Singh",
    comment: "I know a friend who's currently taking that course and wants to join a study group but she has a tight schedule this semester. What time are available and would you mind sharing your schedule?",
    image: davidSingh,
    time: "2 hours and 10 mins ago",
    likeStatus: "inactive",
    likes: 0,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
];

export default function DetailedPostViewPage() {
  {/* Update Likes and Dislikes from each Comments */}
  const [comments, setComments] = useState(commentedusers);

  const handleCommentLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.likes + (comment.likeStatus === "active" ? -1 : 1),
              dislikes: comment.dislikeStatus === "active" ? comment.dislikes - 1 : comment.dislikes,
              likeStatus: comment.likeStatus === "active" ? "inactive" : "active",
              dislikeStatus: "inactive",
            }
          : comment
      )
    );
  };
  
  const handleCommentDislike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              dislikes: comment.dislikes + (comment.dislikeStatus === "active" ? -1 : 1),
              likes: comment.likeStatus === "active" ? comment.likes - 1 : comment.likes,
              dislikeStatus: comment.dislikeStatus === "active" ? "inactive" : "active",
              likeStatus: "inactive",
            }
          : comment
      )
    );
  };

  {/* Update Likes and Dislikes From the Post*/}
  const [likeStyle, setLikeStyle] = useState("inactive"); // Initialize the like status be inactive
  const [dislikeStyle, setDislikeStyle] = useState("inactive"); // Initialize the dislike status to be inactive
  const [likes, setLikes] = useState(poster.likes); // Initial likes count
  const [dislikes, setDislikes] = useState(poster.dislike); // Initial dislikes count

  const dislikeChangeStyle = () => {
      if (dislikeStyle === "inactive") {
        setDislikeStyle("active")
        setDislikes((prevDislikes) => prevDislikes + 1); // Increment dislikes by 1
        if (likes > 0 && likes > poster.likes) setLikes(likes - 1); // Decrement likes if there are any
      } else if ( dislikeStyle !== "inactive") {
          setDislikeStyle("inactive")
          if (dislikes > 0) setDislikes((prevDislikes) => prevDislikes - 1); // subract dislikes by 1
      }
    setLikeStyle("inactive")
  };

  const likeChangeStyle = () => {
    if (likeStyle === "inactive") {
      setLikeStyle("active")
      setLikes((prevLikes) => prevLikes + 1); // Increment likes by 1
      if (dislikes > 0 && dislikes > poster.dislike) setDislikes(dislikes - 1); // Decrement dislikes if there are any
    } else if ( likeStyle !== "inactive") {
        setLikeStyle("inactive")
        if (likes > 0) setLikes((prevLikes) => prevLikes - 1); // subract likes by 1
    }
    setDislikeStyle("inactive")
  };

  const [numberOfComments, setNumberComments] = useState(5);      // show the number of comments from the post
  const [inputValue, setInputValue] = useState("");               // record the text input from the user
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);  // record the current state of visibility of the emoji picker

  {/* Update Comment Input to include Emoji */}
  const onEmojiClick = (emojiData, event) => {
    setInputValue((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  {/* Update the comment Section after submitting a post */}
  const onSubmitComment = () => {
    if (!inputValue.trim()) return; // Prevent submitting empty comments
    setComments((prevComment) => [{
      id: 1,
      name: currentUser.name,
      comment: inputValue,
      image: currentUser.image,
      time: "now",
      likeStatus: "inactive",
      likes: 0,
      dislikeStatus: "inactive",
      dislikes: 0,
      reply: []
      } , ...prevComment.map((comment) => ({
        ...comment,
        id: comment.id + 1, // Increment IDs of all existing replies
      })),
    ]);

    setNumberComments(numberOfComments+1);
    setInputValue("");
    setShowComments(true);
  };



  const [replyValue, setReplyValue] = useState("");

  const [showEmojiPickerComment, setShowEmojiPickerComment] = useState(false);

  {/* Update Comment Input to include Emoji */}
  const onEmojiClickComment = (emojiData, event) => {
    setReplyValue((prevInput) => (prevInput || "") + emojiData.emoji);
    setShowEmojiPickerComment(false);
  };

  {/* Update the comment Section after submitting a post */}
  const onReplyComment = (id) => {
    if (!replyValue.trim()) return; // Prevent submitting empty comments

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              reply: [
                ...(comment.reply || []),
                {
                  id: `${id}-${Date.now()}`,
                  name: currentUser.name,
                  comment: replyValue,
                  image: currentUser.image,
                  time: "now",
                  likeStatus: "inactive",
                  likes: 0,
                  dislikeStatus: "inactive",
                  dislikes: 0,
                },
              ],
            }
          : comment
      )
    );

    setNumberComments(numberOfComments+1);
    setReplyValue("");
    setReplyingTo(false);
  };

  const [showComments, setShowComments] = useState(true); // choose if user want to open or close the comment section
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);      // Go back to the previous page
  };

  //const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);


  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background transition m-auto max-w-7xl">
      <div className = "flex-1 p-6 mt-10 ml-40">
        <div className="flex">
          {/* Back Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from propagating to the parent Link
              handleBackClick();
            }}
            className=" px-4 dark:text-uConnectDark-textSub text-uConnectLight-textSub text-4xl h-full"
            >
            <IoMdArrowBack />
          </button>
          <div className = "flex-col detail_page mx-8">
            {/* Post Contents */}
            <div className=" bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-11">
              <h1 className="text-4xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.title}
              </h1>
              <h2 className="flex items-center mt-4 mx-4 text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Posted by: 
                <img src={poster.image} alt={`${poster.name}`} class="w-12 h-12 rounded-full border-2 border-[#131313] object-cover mx-2" />
                {/* Username is linked to their profile */}
                <Link to={`/profile/${poster.id}`}>
                  <span className="text-uConnectDark-accent"> {poster.name} </span>
                </Link>
              </h2>
              <h3 className="italic font-thin text-lg mx-4 mt-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.time}
              </h3>
              <hr class="w-11/12 mx-auto my-5 border-uConnectLight-textMain dark:border-uConnectDark-textSub border-1"></hr>
              <p className="text-lg mx-4 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              {poster.content}
              </p>
            </div>
            {/* Comment, Like and Dislike Buttons */}
            <div className = "flex-row text-lg">
              <button className={`font-semibold mt-4 px-4 py-2 border inline-flex items-center gap-2 
                  ${ showComments === true 
                    ? "bg-uConnectDark-accent border-uConnectDark-accent dark:text-uConnectLight-textMain text-uConnectDark-textMain rounded-full"
                    : "border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full"
                  }`}
                  onClick={() => setShowComments(!showComments)}>
                    <MdOutlineInsertComment /> Comment
              </button>
              <button className={`${
                          likeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent" 
                        } mt-4 px-4 py-2 inline-flex items-center gap-2`}
                  onClick={likeChangeStyle}>
                    {likes} <BiLike />
              </button>
              <button className={`${
                          dislikeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent" 
                        } mt-4 px-4 py-2 inline-flex gap-2 items-center`}
                  onClick={dislikeChangeStyle}
                  >
                    {dislikes} <BiDislike />
              </button>
            </div>
            {/* Input Comment */}
            <div className="flex mt-10 items-center">
              <img src={currentUser.image} alt={`${currentUser.name}`} class=" w-14 h-14 rounded-full border-2 border-[#131313] object-cover" />
              <div className=" flex-col top-0 left-0 py-1 flex w-full mt-4 lg:mt-0  text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                <textarea
                  type="text"
                  value={inputValue}
                  placeholder="Comment here..."
                  onChange={(e) => setInputValue(e.target.value)}
                  className="placeholder:italic px-3 text-xl bg-transparent mb-1.5 placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none"
                  style={{
                    height: "30px"
                  }}
                />
                <hr class=" mx-auto w-full border-uConnectLight-textMain dark:border-uConnectDark-textMain border-1"></hr>
              </div>
              {/* Set the Emoji Picker */}
              <div className="Emoji_Picker">
                <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      <FaSmile />
                </button>
                      {showEmojiPicker &&(
                        <div className="rounded-lg absolute z-auto right-20 pt-1.5">
                          <Suspense fallback={<div>Loading...</div>}>
                            <EmojiPicker onEmojiClick={onEmojiClick}
                            theme="auto"
                            />
                          </Suspense>
                          
                        </div>
                      )}
              </div>
              {/* Set the Submit Button */}
              <button onClick={onSubmitComment} className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                  >
                    <FaPaperPlane />
              </button>
            </div>
            {/* Show number of people have commented counter */}
            <div className="flex mx-20 my-4 text-uConnectLight-textSub dark:text-uConnectDark-layer3 place-content-between">
              {numberOfComments} People Have Commented
            </div>
            {/* Comment Section */}
            {showComments &&(
            <div>
              {comments.map((user, index) => (
                <div className="flex-col flex ">
                  <div className="flex mx-16 items-center space-x-4">
                    {/* User Image */}
                    <img
                      src={user.image}
                      alt={`${user.name}`}
                      className="w-14 h-14 rounded-full border-2 border-[#131313] object-cover"
                    /> 
                    {/* Username is linked to their profile */}
                    <Link to={`/profile/${user.id}`}>
                      <span className="tracking-wider font-bold text-xl text-uConnectDark-accent"> {user.name} </span>
                    </Link>
                    <span className="tracking-wider font-thin italic text-sm dark:text-uConnectDark-textSub text-uConnectLight-textSub"> {user.time} </span> 
                  </div>
                    <span className="ml-36 mb-1 mr-24 dark:text-uConnectDark-textMain text-uConnectLight-textMain whitespace-pre-wrap break-normal">{user.comment}</span>
                    <div className = "flex-row text-lg mb-4 ml-36">
                      <button className={`font-semibold px-4 py-2 inline-flex items-center gap-2 rounded-xl 
                      ${ replyingTo === user.id 
                        ? " bg-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain"
                        : "border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                        }`}
                          onClick={() => {setReplyingTo(replyingTo === user.id ? null : user.id)
                            setReplyValue("");
                          }}>
                            <MdOutlineInsertComment /> Reply
                      </button>
                      
                      <button className={`${
                          user.likeStatus === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent" 
                          } px-4 py-2 inline-flex items-center gap-2`}
                          onClick={() => handleCommentLike(user.id)}>
                            {user.likes} <BiLike />
                      </button>
                      <button className={`${
                          user.dislikeStatus === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent" 
                          } px-4 py-2 inline-flex items-center gap-2`}
                          onClick={() => handleCommentDislike(user.id)}>
                            {user.dislikes} <BiDislike />
                      </button>
                      {replyingTo === user.id &&(
                        <div className="flex my-4 items-center">
                          <img src={currentUser.image} alt={`${currentUser.name}`} class=" w-14 h-14 rounded-full border-2 border-[#131313] object-cover" />
                          <div className=" flex-col top-0 left-0 py-1 flex w-full mt-4 lg:mt-0  text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                            <textarea
                              type="text"
                              value={replyValue}
                              placeholder="Comment here..."
                              onChange={(e) => setReplyValue(e.target.value)}
                              className="placeholder:italic px-3 text-xl bg-transparent mb-1.5 placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none"
                              style={{
                                height: "30px"
                              }}
                            />
                            <hr class=" mx-auto w-full border-uConnectLight-textMain dark:border-uConnectDark-textMain border-1"></hr>
                          </div>
                          {/* Set the Emoji Picker */}
                          <div className="Emoji_Picker relative">
                            <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                                onClick={() => setShowEmojiPickerComment(!showEmojiPickerComment)}
                                >
                                  <FaSmile />
                            </button>
                                  {showEmojiPickerComment &&(
                                    <div className="rounded-lg absolute z-auto right-0"
                                      style={{ bottom: "100%", transform: "translateY(10px)"}}
                                  >
                                      <EmojiPicker onEmojiClick={onEmojiClickComment}
                                      theme="auto"
                                      />
                                    </div>
                                  )}
                        </div>
                        {/* Set the Submit Button */}
                        <button onClick={() => {
                          onReplyComment(user.id)
                          setReplyingTo(null);
                        }} className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                            >
                              <FaPaperPlane />
                        </button>
                      </div>
                    )}
                    {/* Replies */}
                    {user.reply && user.reply.length > 0 && (
                      <div>
                        {user.reply.map((reply) => (
                        <div className="flex-col flex ">
                          <div className="flex items-center space-x-4">
                            {/* User Image */}
                            <img
                              src={reply.image}
                              alt={`${reply.name}`}
                              className="w-14 h-14 rounded-full border-2 border-[#131313] object-cover"
                            /> 
                            {/* Username is linked to their profile */}
                            <Link to={`/profile/${reply.id}`}>
                              <span className="tracking-wider font-bold text-xl text-uConnectDark-accent"> {reply.name} </span>
                            </Link>
                            <span className="tracking-wider font-thin italic text-sm dark:text-uConnectDark-textSub text-uConnectLight-textSub"> {reply.time} </span> 
                          </div>
                            <span className="ml-16 mb-1 mr-24 dark:text-uConnectDark-textMain text-uConnectLight-textMain whitespace-pre-wrap break-normal">{reply.comment}</span>
                        </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
}
