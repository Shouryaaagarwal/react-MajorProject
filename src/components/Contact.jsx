import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ContactPage() {
  document.title = "Contact Us";
  const navigate = useNavigate();

  return (
    <div className="w-full h-full ">
      <Link
        onClick={() => navigate(-1)}
        className=" absolute hover:text-[#6556CD]   text-white text-2xl left-[5%] top-[5%] ri-arrow-left-fill"
      ></Link>
      <div className="text-white p-10 ml-[10%]">
        <h1 className="text-zinc-400 font-bold text-2xl">Contact Us</h1>
      </div>
      <div className="    text-zinc-400 w-[70vw]  h-[60vh]  shadow-xl shadow-[rgba(255,255,255,.5)] border-2 border-zinc-700 m-auto mt-10">
        <div className="p-10 text-xl text-zinc-300 ">
          <p className=" ">
            We'd love to hear from you! Feel free to reach out to us using the contact information below:
          </p>
          <ul className="mt-4">
            <li>Email: info@showbox.com</li>
            <li>Phone: +1-123-456-7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
