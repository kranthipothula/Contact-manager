"use client"
import React,{ useState } from "react";
import { useForm,Controller } from 'react-hook-form';

 
export default function Home() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
 
  const myFunction = (data:any) => {
    console.log('Form data:', data);
  }
   

const isFormValid = Object.keys(errors).length=== 0;
 
  return (
    <main className="flex min-h -screen flex-col items-center justify-between p-24">
    
      <h1>Add contact</h1>
     <div className='row mt-5'>
        <form onSubmit={handleSubmit(myFunction)}className='bg-yellow rounded p-4 shadow-md'>
          <div className='form-group mb-4'>
            <input type='text' id='Name' placeholder="Name" className="w-full border border-red-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name' placeholder="PhotoUrl" className="w-full border border-red-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name' placeholder="Email" className="w-full border border-red-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name' placeholder="Mobile" className="w-full border border-red-300 rounded p-0"/>
          </div>
          <div className='form-group mb-4'>
            <input type='text' id='Name' placeholder="Company" className="w-full border border-red-300 rounded p-0"/>
          </div>   
    <br></br>
          <button className="bg-green-700 text-white font-bold rounded p-100 cursor-pointer" disabled={!isFormValid || isSubmitting} >
          {isSubmitting? 'Submitting...' : 'Submit'} </button>
        </form>
      </div>
    </main>
  )
}

