import { useRouter } from 'next/router'

const FoodCard = ({ food }) => {

    const router = useRouter();

    const clickDetail = () => {
        router.push(`food/${food.id}`)
    }

    return (
        <li key={food.id} onClick={clickDetail} className='flex flex-col items-center w-[155px] mb-1 bg-slate-800 rounded-lg cursor-pointer'>
            <img src={food.imageUrl} className='object-cover w-[130px] h-[130px] rounded-lg aspect-video m-3' />
            <div className={'font-semibold text-center pb-2 px-2'}>
                <h1 className={'text-xl'}>{food.name}</h1>
            </div>
        </li>
    )
}

export default FoodCard
