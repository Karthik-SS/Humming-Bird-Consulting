import React from 'react';

function Home() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '20px',
                background: '#f5f5f5',
                padding: '20px',
				borderRadius: '8px', // Optional: Round the corners of the background
            }}
        >
            {/* Left Section: Image */}
            <div style={{ flex: '1' }}>
                <img
                    src="/assets/HummingBird.jpg"
                    alt="Humming Bird"
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                />
            </div>

            {/* Right Section: Text */}
            <div style={{ flex: '1', alignSelf: 'flex-start' }}>
                <h2
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '16px',
                        marginTop: '0', // Align header with the top of the image
                    }}
                >
                    Microservices: The Power of Agile "Wings"
                </h2>
                <p style={{ marginBottom: '16px', color: '#555' }}>
                    Microservices architecture has transformed the way we design scalable,
                    maintainable, and robust applications. By breaking down a monolithic
                    system into smaller, independent services, businesses can achieve greater
                    agility and resilience.
                </p>
                <p style={{ marginBottom: '16px', color: '#555' }}>
                    Each microservice can be developed, deployed, and scaled independently,
                    enabling faster iterations and reduced time to market. Moreover, this
                    architecture promotes the use of polyglot technologies, allowing teams
                    to choose the best tools for the job.
                </p>
                <p style={{ color: '#555' }}>
                    Embracing microservices can lead to enhanced developer productivity,
                    improved fault isolation, and a more adaptable infrastructure, ensuring
                    that your applications are ready to meet the demands of the future.
                </p>
            </div>
        </div>
    );
}

export default Home;