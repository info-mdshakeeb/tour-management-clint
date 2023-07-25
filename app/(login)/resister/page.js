'use client'

import ImageUpload from "@/components/ImgUpload/ImgUpload";
import FormTemplate from "@/components/ui/FormTemplate";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function resister() {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const tableData = [
        { label: 'name', name: 'name', type: 'name', placeholder: 'name', error: errors.name },
        { label: 'email', name: 'email', type: 'email', placeholder: 'email', error: errors.email },
        {
            label: 'password', name: 'password', type: 'password', placeholder: 'password',
            error: errors.password
        }]

    const onSubmit = (data) => {
        const resisterData = {
            name: data.name,
            email: data.email,
            password: data.password,
            imageUrl
        }

        console.log(resisterData);

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-full max-w-xs p-4  rounded-lg  shadow-md backdrop-blur-lg ">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <p className="text-2xl font-medium  text-center">
                            Resister
                        </p>
                        {tableData.map((data, index) =>
                            <FormTemplate
                                key={index}
                                data={data}
                                register={register}
                            />
                        )}
                        <div className="mt-2">
                            <ImageUpload uploadProgress={uploadProgress} setUploadProgress={setUploadProgress} imageUrl={imageUrl} setImageUrl={setImageUrl} />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit" className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                                Resister
                            </button>
                            <div className="text-sm mt-2 font-medium text-gray-500 flex justify-between">
                                Already registered? <Link href='/login' className={`text-blue-700 hover:underline `}>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}