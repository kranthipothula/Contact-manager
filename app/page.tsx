"use client"
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";





interface UserData {
  
  name: string;
  email: string;
  phone: string;
 
}



function Home()  {
  const router =useRouter();
  const [data, setData] = useState<UserData[]>([]);
  const [records, setRecords] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  

  


  useEffect(() => {
    axios.get<UserData[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
 
  const filterRecords = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setRecords(
      data.filter( (f) =>
          f.name.toLowerCase().includes(inputValue) )
    );
  };


  const handleButtonClick = () => {
    router.push("/components/contacts/new");
  
    
  };
  
 
  return (
    <div>
      <Navbar />
      
      <div className="flex items-center space-x-4 py-2 ml-40">
      <h1 className="text-green-700 font-bold text-lg">Contact manager</h1>
      <button onClick={handleButtonClick}
        className="bg-green-700 hover:bg-green-400 ml-10 rounded">
        <i className="fa fa-plus-circle"/>New
      </button>
      </div>
      
      
      <div className="flex items-center space-x-4 py-2 ml-40">
      <p className="font-sans md:font-serif">Contact management software is a tool that stores your contact information with your customers and prospects while keeping track of your interactions between your business and your contacts. 
              For example, the information could be the phone numbers, addresses, social media handles, emails, sales history, linked businesses, and so on. </p>
      </div>
      <div className="flex items-center space-x-4 py-2 ml-40">
         <input className="border p-1 mr-1" type="text" placeholder="Search Name" onChange={filterRecords}/>
        <button className="bg-green-700 text-white p-0">Submit</button>
      </div>
      
      <div className="flex items-center space-x-4 py-2 ml-40">
      <section>
      <div className="grid grid-cols-3 gap-4 ml-4 ">
            {loading ? (
              <p>Loading...</p>
            ) : (
              records.map((d, i) => (
                <div key={i} className="bg-white my-2 rounded-lg ring-1">
                 
                  <div className="links flex flex-row space-x-8">
                  <p className="p-1 ml-20">{d.name}</p>
                  <Link href="/components/contacts/view">view</Link>
                  </div>
                  <div className="links flex flex-row space-x-8">
                  <p className="p-1 ml-20">{d.email}</p>
                  <Link href="/components/contacts/edit">edit</Link>
                  </div>
                  <p className="p-1 ml-20">{d.phone}</p>
                </div>
              ))
            )}
      </div>
    </section>
      </div>

      
     
      </div>
    
      
    
  );
};

export default Home;