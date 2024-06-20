import React from 'react'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FoodCard from '@/components/FoodCard'

const Home = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" }
      });
      setFoods(resp.data.data);
    };

    getData();
  }, [])

  return (
    <div>
      <Navbar />
      <ul className='flex flex-wrap justify-center w-full gap-5 px-16 pt-20 mb-10'>
        {foods.map((food) => (
          <FoodCard food={food} />
        ))}
      </ul>
    </div>
  )
}

export default Home
