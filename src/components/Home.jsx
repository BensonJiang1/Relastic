import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { tasks } from "../constants";
import { fadeIn} from "../utils/motion";



const ServiceCard = ({ index, title, icon}) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        <button className='text-white text-[20px] font-bold text-center'>Collect</button>
      </div>
    </motion.div>
);

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  

  const [points,setPoints] = useState(0);
  const [collected,setCollected] = useState(true);
  
  
  const handlePoints = (points,c) =>{
    if(c == false){
      return 0;
    }
    else{
      setPoints(points +6);
      setCollected(false);
    }
  
  }


  return (
    <div className='bg-cover bg-no-repeat bg-center bg-hero-pattern '>

      <h2 className='text-3xl flex justify-center'>Hello!   {user && user.email}</h2>

      
      <span className="text-4xl font-bold bg-gradient-to-r from-green-800 via-gray-400 to-green-800 text-transparent bg-clip-text absolute top-0 right-0">Points: {points}</span> 
      

      <div className='mt-20 flex flex-row gap-10'>
        {tasks.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
      <div className='mt-20 flex flex-row gap-10'>
        {tasks.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='flex text-3xl flex-col justify-center space-y-5 mt-20' >
        <button onClick={()=>{handlePoints(points, collected)}}>Collect All</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home