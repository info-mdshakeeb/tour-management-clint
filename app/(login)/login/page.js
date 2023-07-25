'use client'
import FormTemplate from "@/components/ui/FormTemplate";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function login() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const getUserCredentials = () => {
        const user = typeof window !== 'undefined' && localStorage ? localStorage.getItem('user') : null
        return user ? JSON.parse(user) : null
    }
    const saveUserCredentials = (email, password) => {
        const user = { email, password }
        typeof window !== 'undefined' && localStorage ? localStorage.setItem('user', JSON.stringify(user)) : null
    }

    const removerUserCredentials = () => {
        typeof window !== 'undefined' && localStorage ? localStorage.removeItem('user') : null
    }
    const [saveInfo, satSaveInfo] = useState(getUserCredentials() ? true : false)

    const user = getUserCredentials()
    const email = user?.email
    const password = user?.password

    const onSubmit = (data) => {
        if (typeof window !== 'undefined' && localStorage) {
            if (saveInfo) {
                saveUserCredentials(data.email, data.password)
            } else {
                removerUserCredentials()
            }
        }
        reset()

    }
    const tableData = [
        { label: 'email', name: 'email', type: 'email', placeholder: 'email', def: email, error: errors.email },
        {
            label: 'password', name: 'password', type: 'password', placeholder: 'password',
            def: password, error: errors.password
        }]
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-full max-w-xs p-4  rounded-lg  shadow-md backdrop-blur-lg ">
                <div className="h-[330px]">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <p className="text-2xl font-medium  text-center">
                            Sign in
                        </p>
                        {tableData.map((data, index) =>
                            <FormTemplate
                                key={index}
                                data={data}
                                register={register}
                            />
                        )}
                        <div className="flex  items-center justify-between">
                            <label
                                onChange={() => satSaveInfo(!saveInfo)}
                                className="label cursor-pointer">
                                <input type="checkbox"
                                    defaultChecked={user ? true : false}

                                    className="checkbox checkbox-sm " />
                                <span className="label-text pl-2">Remember me</span>

                            </label>

                            <a href="/" className="flex items-start text-sm text-gray-600  hover:underline">Forget Password?</a>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm mt-2 font-medium text-gray-500 flex justify-between">
                                Not registered? <Link href='/resister' className="text-blue-700 hover:underline ">
                                    Resister
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}