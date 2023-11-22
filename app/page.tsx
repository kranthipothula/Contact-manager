"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Searchbar";
import { useRouter } from "next/navigation";



function Home()  {
  const router =useRouter();
  const handleButtonClick = () => {
    router.push("/components/contacts/new");
  
  };
  return (
    <div>
      <Navbar />
      
      <div className="flex items-center space-x-4 py-2 ml-40">
      <h1 className="text-green-700 font-bold text-lg">Contact manager</h1>
      <button onClick={handleButtonClick}
        className="bg-green-700 hover:bg-green-400 ml-20 rounded">
        +New
      </button>
      </div>
      
      
      <div className="container mx-auto flex items-center justify-between">
      <p className="font-sans md:font-serif">Contact management software is a tool that stores your contact information with your customers and prospects while keeping track of your interactions between your business and your contacts. 
              For example, the information could be the phone numbers, addresses, social media handles, emails, sales history, linked businesses, and so on. </p>
      </div>

      <div className="container mx-auto flex items-center justify-between"><Search/></div>
      </div>
      
    
  );
};

export default Home;