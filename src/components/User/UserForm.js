import React from 'react'

export default function UserForm() {
    
    return (

        <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">User Form</h2>
                <form className="flex flex-col" action={process.env.REACT_APP_BACKEND_URL+"/images"} method="post"  encType="multipart/form-data">
                    <input placeholder="Full Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" name="name" required />
                    <input placeholder="Social media handle URL" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" name="social" required />
                    <input placeholder="Resume" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file" name="avatar" />
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}
