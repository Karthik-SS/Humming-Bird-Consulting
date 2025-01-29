import React from 'react';

function FounderProfile() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center w-80">
            <img 
                src="/assets/Founder.jpg"  // Replace this with your actual image file name
                alt="Founder"
				style={{
            width: "80%",  /* New: Shrinks image */
            maxWidth: "250px",  /* Limits max size */
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
            <h2 className="text-xl font-bold mt-4">Karthik</h2>
            <p className="text-gray-600 italic">Founder</p>
            <p className="mt-2 text-gray-700">
                Helping Startups Soar To Success With Clarity On Fundamental Concepts, Expert Insights, Strategies, And With Humming Bird's : Wing Speed Execution!.
            </p>
        </div>
    );
}

export default FounderProfile;
