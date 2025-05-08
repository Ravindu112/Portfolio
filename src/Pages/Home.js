import React from "react";
import Profilepicture from "../Images/Ravindu Vidurusinghe .jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex items-center h-screen px-10 pl-28 bg-slate-950">
      
      {/* Left Side: Text Content */}
      <div className="max-w-xl space-y-6 text-white">
        <h1 className="text-5xl font-bold">Hi, I'm Ravindu</h1>
        <h3 className="text-2xl font-semibold text-blue-400">Web Developer</h3>
        <p>
          Passionate about building modern and responsive websites with
          intuitive user experiences.
        </p>
        <div className="flex gap-4">
          <Link to="/contact" className="px-6 py-2 bg-blue-400 text-[#081b29] rounded-lg font-semibold hover:bg-[#081b29] hover:border border-blue-400 hover:text-blue-400">
            Hire Me
          </Link>
          <Link to="/about" className="px-6 py-2 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-[#081b29]">
            Let's Talk
          </Link>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="https://www.facebook.com/" className="w-10 h-10 border border-blue-400 text-blue-400 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-[#081b29]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/?lang=en" className="w-10 h-10 border border-blue-400 text-blue-400 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-[#081b29]">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" className="w-10 h-10 border border-blue-400 text-blue-400 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-[#081b29]">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex items-center justify-center flex-1">
        <img 
          src="data:image/jpeg;base64,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"
          alt="Ravindu Profile" 
          className="object-cover shadow-lg rounded-2xl w-96 h-96"
        />
      </div>
    </section>

    
    
  );
}

export default Home;
