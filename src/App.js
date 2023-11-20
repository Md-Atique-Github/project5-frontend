import "./App.css";
import Navbar from "./components/Navbar";
import { GoSearch } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore"
import {db} from "./config/firebase"

function App() {

const [contacts, setContacts] = useState([]);

useEffect(()=>{
const getContacts = async () =>{
try{
const contactsRef = collection(db, "contacts");
const contactsSnapshot = await getDocs(contactsRef);
console.log(contactsSnapshot);
}catch(err){
  console.log(err.message);
}
};

getContacts();
},[])

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <GoSearch className="ml-1 absolute text-3xl text-white" />
          <input
            type="text"
            placeholder="Search Contacts"
            className="  pl-9 flex-grow rounded-md h-10 border border-white bg-transparent text-white"
          />
        </div>
    
          <AiFillPlusCircle className=" text-5xl text-white cursor-pointer" />
        
        </div>
      </div>
    </>
  );
}

export default App;
