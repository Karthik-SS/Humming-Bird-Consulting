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
            <p className="text-gray-600 italic">About Me</p>
            <p className="mt-2 text-gray-700">
              Helping Startups Soar To Success With Clarity On Fundamental Concepts, Expert Insights, Strategies, And With Humming Bird's : Wing Speed Execution!
            </p>

            <p className="mt-4 text-gray-700">
              With 14+ years of experience as a Software Engineering Lead, I specialize in helping startups and enterprises transform business, technology, and operations to drive efficiency and scalability. Through strategic problem-solving, I have led teams to achieve $60 million in enterprise cost savings, optimizing systems to reduce inefficiencies, enhance performance, and scale effectively.
           </p>

           <p className="mt-4 text-gray-700">
             I work closely with executive leaders, founders, and growing teams, guiding them through critical decision-making, architecture design, and technology roadmaps to turn ideas into scalable, high-impact solutions. Whether it’s building high-performing engineering teams, optimizing business processes, or designing robust technical infrastructures, I bring a holistic, results-driven approach to problem-solving.
          </p>

           <p className="mt-4 text-gray-700">
             Beyond consulting, I’m deeply committed to education and mentorship, having tutored in Math, Chess, Computer Science, and Philosophy to foster analytical thinking and lifelong learning. My roots as a teacher and mentor allow me to simplify complex concepts, making them accessible for technical and non-technical audiences alike.
          </p>

          <p className="mt-4 text-gray-700">
             I’m also a passionate musician, playing guitar and singing, and an active supporter of the autism community, working with Autism Speaks to advocate for greater awareness and inclusion.
          </p>

         <p className="mt-4 text-gray-700">
           💡 Want to hear about one of the greatest queen sacrifices in chess history? Let’s chat! ♙♚♛♝♞♜😊💙💐🙏⚡🌻♟♔♕♗♘♖
         </p>
        </div>
    );
}

export default FounderProfile;
