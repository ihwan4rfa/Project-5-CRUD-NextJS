import axios from "axios";
import Navbar from "@/components/Navbar";
import FoodForm from "@/components/FoodForm";

export async function getServerSideProps(context) {
    const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
        headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
        }
    });
    const data = resp.data.data;
    return {
        props: {
            food: data
        }
    };
}

const foodDetails = ({ food }) => {
    return (
        <div>
            <Navbar />
            <ul className='flex w-full gap-5 px-16 pt-20 mb-10'>
                <li key={food.id} className='flex w-1/2 mb-1 rounded-lg cursor-pointer bg-slate-800'>
                    <img src={food.imageUrl} className='object-cover w-[150px] h-[150px] rounded-lg aspect-video m-3' />
                    <div className='px-2 my-4 font-semibold'>
                        <h1 className='text-3xl uppercase'>{food.name}</h1>
                        <h1 className='text-xl'><i className="mr-3 fa-solid fa-caret-right text-amber-500"></i>{food.description}</h1>
                        <h1 className='pt-3 text-base italic font-normal text-slate-300'><i className="not-italic">Bahan: </i>{food.ingredients.join(', ')}</h1>
                    </div>
                </li>
                <div className="flex w-1/2 mb-1 rounded-lg cursor-pointer bg-slate-800">
                    <FoodForm isUpdate={true} detailFormData={{ name: food.name, imageUrl: food.imageUrl, description: food.description, ingredients: food.ingredients}} />
                </div>
            </ul>
        </div>
    )
}

export default foodDetails
