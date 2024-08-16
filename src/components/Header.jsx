import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <div>
            <img className ='object-cover w-full md:h-[600px] h-[450px]' src="./assets/sky.jfif" alt="Background" />
            <div className='absolute top-0 left-0 w-full md:h-[600px] h-[450px] bg-white/45'></div>

            <div className='absolute md:top-[45px] top-[80px] w-full h-[480px] flex flex-col md:flex-row-reverse items-center md:justify-center'>
                
                <img 
                    className='w-1/4 md:w-60 h-auto md:h-7/10 rounded-full mb-4 md:mb-0' 
                    src="./assets/pfp.png" 
                    alt="Profile" 
                />

                <div className='max-w-[350px] w-full text-center md:text-left'>
                    <h2 className='md:text-5xl text-4xl'>Hi, I'm</h2>
                    <h1 className='md:text-7xl text-6xl font-bold text-sky-400'>Andrew</h1>
                    <h2 className='md:text-5xl text-4xl'>
                        A 
                        <TypeAnimation
                            sequence={[
                                'Student',
                                5000, 
                                'Developer',
                                5000,
                                'Designer',
                                5000,
                            ]}
                            wrapper="span"
                            speed={25}
                            style={{ fontSize: '1em', paddingLeft: '15px' }}
                            repeat={Infinity} />
                    </h2>
                </div>

            </div>

        </div>
    );
}

export default Header;
