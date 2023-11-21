"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Searchbar";
import TextWithButton from "./components/TextwithButton";



const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
    
    
  };
  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto flex items-center justify-between">
           <TextWithButton buttonText="+New" onButtonClick={handleClick} textColor="text-green-700" buttonColor="bg-green-700">Contact manager</TextWithButton>
      </div>
      
      <div className="container mx-auto flex items-center justify-between">
          <p >Contact management software is a tool that stores your contact information with your customers and prospects while keeping track of your interactions between your business and your contacts. 
              For example, the information could be the phone numbers, addresses, social media handles, emails, sales history, linked businesses, and so on. </p>
      </div>

      <div className="container mx-auto flex items-center justify-between"><Search/>
      </div>
      </div>
      
    
  );
};

export default Home;