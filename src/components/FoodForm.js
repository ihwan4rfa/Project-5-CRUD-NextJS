import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react";

const FoodForm = ({ isUpdate, detailFormData }) => {

    const router = useRouter();
    const [formData, setFormData] = useState(detailFormData || { name: "", imageUrl: "", description: "", ingredients: [] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUpdate = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
        const apiCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
        const resp = await axios.post(
            isUpdate ? apiUpdate : apiCreate,
            {
                name: formData.name,
                imageUrl: formData.imageUrl,
                description: formData.description,
                ingredients: formData.ingredients.split(",").map(item => item.trim())
            },
            {
                headers: {
                    apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
                }
            }
        )
        resp.data.code === "200" && router.reload();
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="flex px-3 py-1 mx-5 my-2 mt-5 rounded-md text-slate-900"
                    placeholder="Nama Makanan"
                />
                <input
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="flex px-3 py-1 mx-5 my-2 rounded-md text-slate-900"
                    placeholder="Deskripsi"
                />
                <input
                    value={formData.imageUrl}
                    onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
                    className="flex px-3 py-1 mx-5 my-2 rounded-md text-slate-900"
                    placeholder="Url Gambar"
                />
                <input
                    value={formData.ingredients}
                    onChange={(e) => setFormData((prev) => ({ ...prev, ingredients: e.target.value }))}
                    className="flex px-3 py-1 mx-5 my-2 rounded-md text-slate-900"
                    placeholder="Bahan"
                />
                <button type="submit" className="px-4 py-1 mt-2 bg-green-500 rounded-md">
                    {isUpdate ? "Update" : "Create"}
                </button>
            </form>
        </div>
    )
}

export default FoodForm
