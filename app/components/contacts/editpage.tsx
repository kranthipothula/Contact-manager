"use client"
import React,{ useState } from "react";
import { useForm,Controller } from 'react-hook-form';
import Navbar from "../Navbar";

 
export default function Home() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
 
  const myFunction = (data:any) => {
    console.log('Form data:', data);
  }
   

const isFormValid = Object.keys(errors).length=== 0;
 
  return (
    <div>
      <Navbar/>
      <main className="flex min-h -screen flex-col items-center justify-between p-10">
      <h1 className="text-green-700 text-lg font-bold">Edit contact</h1>
      <p className="font-sans md:font-serif">Loverm ipsum dolor sit amet consecteture, adipsicing elit. Aspesrnature exercitationem distinitio ludantium hic ipsam mollitia percifications ominus iusto. Soluta error quo,
        molestia libero laborum vitae? possiums voluptatum iuto officiis!
      </p>
     <div className='row mt-5'>
        <form onSubmit={handleSubmit(myFunction)}className='bg-yellow rounded p-4 shadow-md'>
          <div className='form-group mb-4'>
            <input type='text' id='Name'  className="w-full border border-white-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name'  className="w-full border border-white-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name'  className="w-full border border-white-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name'  className="w-full border border-white-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name' className="w-full border border-white-300 rounded p-0"/>
          </div>   
          <div className='form-group mb-4'>
            <input type='text' id='Name' className="w-full border border-white-300 rounded p-0"/>
          </div>
    <br></br>
          <button className="bg-green-700 text-white font-bold rounded p-50 cursor-pointer" disabled={!isFormValid || isSubmitting} >
          {isSubmitting? 'Submitting...' : 'Upadte'} </button>
        </form>
      </div>
    </main>
    </div>
  )
}