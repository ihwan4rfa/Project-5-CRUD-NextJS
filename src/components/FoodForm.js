import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react";

const FoodForm = ({ isUpdate, detailFormData }) => {

    const router = useRouter();
    const [formData, setFormData] = useState(detailFormData || { name: "", imageUrl: "", description: "", ingredients: [] });

    const handleDelete = async () => {
        const apiDelete = `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${router.query.id}`;
        const resp = await axios.delete(apiDelete, {
            headers: {
                apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
            }
        });
        resp.data.code === "200" && router.push("/");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUpdate = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
        const apiCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
        const ingredientsArray = typeof (formData.ingredients) === 'string'
            ? formData.ingredients.split(",").map(item => item.trim())
            : formData.ingredients;
        const validateUrl = (url) => {
            if (!url.match(/^(http|https):\/\//)) {
                return `https://${url}`
            }
            return url;
        }

        const resp = await axios.post(
            isUpdate ? apiUpdate : apiCreate,
            {
                name: formData.name,
                description: formData.description,
                imageUrl: validateUrl(formData.imageUrl),
                ingredients: ingredientsArray
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
        isUpdate && resp.data.code === "200" ? router.reload() : router.push("/");
    }

    return (
        <div className="w-full">
            <div className="flex flex-col m-5">
                <input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="flex px-3 py-1 m-2 rounded-md text-slate-900"
                    placeholder="Nama Makanan"
                />
                <input
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="flex px-3 py-1 m-2 rounded-md text-slate-900"
                    placeholder="Deskripsi"
                />
                <input
                    value={formData.imageUrl}
                    onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
                    className="flex px-3 py-1 m-2 rounded-md text-slate-900"
                    placeholder="Url Gambar"
                />
                <input
                    value={formData.ingredients}
                    onChange={(e) => setFormData((prev) => ({ ...prev, ingredients: e.target.value }))}
                    className="flex px-3 py-1 m-2 rounded-md text-slate-900"
                    placeholder="Bahan"
                />
                <div className="flex">
                    <button onClick={handleSubmit} className="px-4 py-1 m-2 bg-teal-600 rounded-md hover:bg-teal-700 w-fit">
                        {isUpdate ? "Update" : "Create"}
                    </button>
                    <button onClick={handleDelete} className={`px-4 py-1 m-2 rounded-md bg-rose-600 hover:bg-rose-700 w-fit ${isUpdate ? '' : 'hidden'}`}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default FoodForm
