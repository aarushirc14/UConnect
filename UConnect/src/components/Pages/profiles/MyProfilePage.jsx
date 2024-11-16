import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar";
import { FaEdit } from "react-icons/fa";
import sofiaMartinez from "../../../assets/profilePics/sofiaMartinez.jpg";

export default function MyProfilePage() {
  const user = {
    profileImage: sofiaMartinez,
    firstName: "Sofia",
    lastName: "Martinez",
    major: "Environmental Science",
    year: "1st Year",
    bio: "I love field research, learning about climate change solutions, and volunteering in conservation efforts. In my free time, you’ll find me hiking, attending eco-workshops, or experimenting with DIY eco-friendly projects.",
    courses: ["BIOL 241", "CHEM 201", "MATH 211", "PHYS 211", "ENSC 201"],
    interests: ["Camping", "Hiking", "Photography","Reading"],
    posts: [
      
      {
        id: 1,
        title: "Community Garden Initiative",
        content:
          "Our community garden project is coming along great! Thanks to everyone who helped out last weekend.",
      },
    ],
  };

  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    navigate("/edit-profile"); // Navigate to EditProfilePage
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pl-[10rem] pr-6">
        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-10 w-full max-w-7xl bg-[#131313] p-4 mb-14">
          <SearchBar />
        </div>
        {/* Top Section */}
        <div className="flex flex-wrap w-full max-w-7xl gap-6">
          {/* Left Section */}
          <div className="flex-[2] bg-[#414040] rounded-lg p-8 flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#000000] mb-4">
              <img
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h1 className="text-3xl font-semibold text-[#FC9D04]">
              {user.firstName} {user.lastName}
            </h1>
            {/* Major */}
            <p className="text-lg text-[#FFFFFF]">{user.major}</p>
            {/* Year */}
            <p className="text-md text-[#FFFFFF]">{user.year}</p>
            {/* Edit Profile Button */}
            <button onClick={handleEditProfileClick} className="mt-6 py-1 px-4 bg-transparent border-2 border-[#FC9D04] text-[#FFFFFF] rounded-full inline-flex items-center justify-center gap-2 hover:bg-[#FC9D04] hover:text-black transition">
            <FaEdit className="text-lg" /> {/* Edit Icon */}
              Edit Profile
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-[3] bg-[#414040] rounded-lg p-6">
            {/* Bio Section */}
            <div className="bg-[#C6C3C3] rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-[#000000]">Bio</h2>
              <p className="text-[#000000] mt-2">{user.bio}</p>
            </div>

            {/* Courses Section */}
            <div className="bg-[#C6C3C3] rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-[#000000]">Courses</h2>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {user.courses.map((course, index) => (
                  <span
                    key={index}
                    className="bg-[#414040] border-2 border-[#FC9D04] text-[#FFFFFF] px-4 py-1 rounded-full text-center"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-[#C6C3C3] rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-[#000000]">Interests</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-[#414040] border-2 border-[#FC9D04] text-[#FFFFFF] px-4 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* My Posts Section */}
        <div className="w-full max-w-7xl bg-[#414040] rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-[#FC9D04] mb-4">My Posts</h2>
          <div className="flex flex-col gap-4">
            {user.posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#C6C3C3] rounded-lg p-4"
              >
                <h3 className="text-md font-semibold text-[#000000]">
                  {post.title}
                </h3>
                <p className="text-sm text-[#000000] mt-2">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
