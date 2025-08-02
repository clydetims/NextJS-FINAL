import React from 'react'

export const FloatingShapes: React.FC = () => {
    return (
        <>
            <div className='fixed inset-0 overflow-hidden pointer-events-none z-[-1]'>
                <div className="absolute w-20 h-20 bg-white bg-opacity-10 rounded-full left-[10%] animate-float"></div>
                <div className="absolute w-15 h-15 bg-white bg-opacity-10 rounded-full left-[80%] animate-float-delayed-2"></div>
                <div className="absolute w-25 h-25 bg-white bg-opacity-10 rounded-full left-[45%] animate-float-delayed-4"></div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(100vh) rotate(0deg);}
                    100% { transform: translateY(-100px) rotate(360deg);}
                }

                .animate-float {
                    animation: float 20x infinite linear;
                }

                .animate-float-delayed-2 {
                    animation: float 20s infinite linear;
                    animation-delay: 2s;
                }
                
                .animate-float-delayed-4 {
                    animation: float 20s infinite linear;
                    animation-delay: 4s;
                }
            
            `}  
            </style>
        </>
    )
}