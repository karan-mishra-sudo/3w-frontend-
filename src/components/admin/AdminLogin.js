import React from 'react'
import {useNavigate} from "react-router-dom"
export default function AdminLogin() {
    const nevigate=useNavigate();
    function goOndashboard(e) {
        e.preventDefault();
        nevigate("/dashboard");
    }
    return (
        <div class="flex flex-col items-center justify-center h-screen dark">
            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-200 mb-4">Admin Login</h2>
                <form onSubmit={goOndashboard} class="flex flex-col">
                    <input placeholder="Enter the Username" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input placeholder="Enter the password" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit"  >Login</button>
                </form>
            </div>
        </div>
    )
}
