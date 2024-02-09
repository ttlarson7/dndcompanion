import React from 'react';

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">Hello, World!</h1>
            <p className="mt-4 text-gray-600">This is a Tailwind CSS and DaisyUI app.</p>
        </div>
        </div>
    );
}