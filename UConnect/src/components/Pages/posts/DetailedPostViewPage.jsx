// src/components/pages/posts/DetailedPostViewPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import {
  FaSmile,
  FaPaperPlane,
  FaSort,
} from "react-icons/fa";

import rashidaWilliams from "../../../assets/profilePics/rashidaWilliams.jpeg";
import shirleyLee from "../../../assets/profilePics/shirleyLee.webp";

const commentedusers = [
  {
    name: "Rashida Williams",
    comment: "Hi Tracy! I'm a photography enthusiast too! I'd love to join you for some campus shots this weekend. What time were you thinking of meeting up?",
    image: rashidaWilliams,
    time: "15 mins ago"
  },
  {
    name: "Shirley Lee",
    comment: "Hey there! I'm into photography as well. I’ve been wanting to capture some sunrise or golden hour shots around campus.",
    image: shirleyLee,
    time: "30 mins ago"
  },
];

export default function DetailedPostViewPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Add code here where it collects input text data 
    navigate("/home");      // After posting either return to home or go straight to Post view, for now it's home
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background transition">
      <div className = "flex-1 p-6 mt-10 ml-40">
        <div className="flex">
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
            <div className=" bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-11">
              <h1 className="text-4xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Photography Enthusiasts
              </h1>
              <h2 className="flex items-center mt-4 mx-4 text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Posted by: 
                <img src="/src/assets/profilePics/tracySmith.jpeg" alt="Tracy Smith" class="w-12 h-12 rounded-full border-2 border-[#131313] object-cover mx-2" />
                <span className="text-uConnectDark-accent"> Tracy Smith </span>
              </h2>
              <h3 className="italic font-thin text-lg mx-4 mt-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                12/3/2024 - 9:24 pm
              </h3>
              <hr class="w-11/12 mx-auto my-5 border-uConnectLight-textMain dark:border-uConnectDark-textSub border-1"></hr>
              <p className="text-lg mx-4 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              Any photography enthusiasts here? Would love to connect with fellow photographers for some campus shots this weekend.
              </p>
            </div>
            <div className = "flex-row text-lg">
              <button className="font-semibold mt-4 px-4 py-2 border inline-flex items-center gap-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <MdOutlineInsertComment /> Comment
              </button>
              <button className="mt-4 px-4 py-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <BiLike />
              </button>
              <button className="mt-4 px-4 py-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <BiDislike />
              </button>
            </div>
            <div className="flex mt-10 items-center">
              <img src="/src/assets/profilePics/landonStone.jpg" alt="Landon Stone" class=" w-14 h-14 rounded-full border-2 border-[#131313] object-cover" />
              <div className=" flex-col top-0 left-0 py-1 flex w-full mt-4 lg:mt-0  text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                <input
                  type="text"
                  placeholder="Comment here..."
                  className="placeholder:italic p-3 text-xl bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none"
                />
                <hr class=" ml-3 w-full border-uConnectLight-textMain dark:border-uConnectDark-textMain border-1"></hr>
              </div>
              <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <FaSmile />
              </button>
              <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <FaPaperPlane />
              </button>
            </div>
            <div className="flex mx-20 my-4 text-uConnectLight-textSub dark:text-uConnectDark-layer3 place-content-between">
              1 People Have Commented
              <button className="flex items-center gap-1">
                <FaSort className="text-2xl"/> Sort By
              </button>
            </div>
            <div className= "">
              {commentedusers.map((user, index) => (
                <div className="flex-col flex ">
                  <div className="flex mx-16 items-center space-x-4">
                    {/* User Image */}
                    <img
                      src={user.image}
                      alt={`${user.name}`}
                      className="w-14 h-14 rounded-full border-2 border-[#131313] object-cover"
                    /> 
                    <span className="tracking-wider font-bold text-xl text-uConnectDark-accent"> {user.name} </span>
                    <span className="tracking-wider font-thin italic text-sm dark:text-uConnectDark-textSub text-uConnectLight-textSub"> {user.time} </span> 
                  </div>
                    <span className="ml-36 mb-1 mr-8 dark:text-uConnectDark-textMain text-uConnectLight-textMain">{user.comment}</span>
                    <div className = "flex-row text-lg mb-4 ml-36">
                      <button className="font-semibold px-4 py-2 inline-flex items-center gap-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                          >
                            <MdOutlineInsertComment /> Comment
                      </button>
                      <button className="px-4 py-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                          >
                            <BiLike />
                      </button>
                      <button className="px-4 py-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                          >
                            <BiDislike />
                      </button>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}


