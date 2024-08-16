import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';


function AboutMe() {
    return (
        <div id='AboutMe'>
            
            <div className="flex items-center xl:pl-[300px] xl:pr-[300px] pl-6 pr-6 md:pt-[70px] pt-[30px]">
                <h2 className="xl:text-4xl text-3xl font-medium text-[#545353]">About Me</h2>
                <div className="flex-grow border-t-2 border-gray-300 ml-3" style={{ marginTop: '0.6em', maxWidth: '1200px' }}></div>
            </div>
            
            <div className='xl:pl-[320px] xl:pr-[320px] pl-7 pr-7 md:pt-[20px] pt-[10px]'>
                <p className='md:text-xl text-sm'>
                    Hi! my name is Andrew Zou and I am an aspiring software engineer from Queens, NYC. I am a junior studying
                    Computer Science at <a className='underline underline-offset-2 hover:decoration-[#f36917] hover:text-[#f36917]' 
                                            href="https://www.rit.edu/" target="_blank">
                    Rochester Institute of Technology (RIT)</a>.
                </p>
                <p className='md:text-xl text-sm md:pt-[5px] pt-[2px]'>
                    At RIT, I have learned a lot of different programming languages and technologies. I have worked on various
                    projects and coursework, like developing websites and database applications. These experiences have helped
                    me build a strong foundation in software development and problem-solving, all of which I am ready to apply
                    in a practical setting.
                </p>
                <p className='md:text-xl text-sm md:pt-[5px] pt-[2px]'>
                    When I am not coding, I enjoy   drawing, playing video games, and working out.  
                </p>

                <p className='text-center italic text-[#545353] md:text-xl text-sm md:pt-[10px] pt-[5px]'>
                    I am currently looking for a co-op / internship for Spring 2025 / Summer 2025 / Fall 2025
                </p>
                
                <p className='text-center md:text-xl text-base md:pt-[6px] pt-[2px]'>💼</p>
                
                <div className='flex flex-col items-center md:pt-[15px] pt-[10px]'>
                    <a href="public/assets/Resume AUGUST 2024 - UPDATED 3.pdf" target="_blank">
                        <button className="transition ease-in duration-300 bg-[#0091ff] hover:bg-[#2977b3] 
                                            text-white font-bold md:py-3 md:px-8 py-2 px-6 rounded-full">
                        Resume
                        </button>
                    </a>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/andrew-zou-rit/" target="_blank">
                            <AiOutlineLinkedin className="text-[#0077b1] hover:text-[#005582] text-4xl transition duration-300 ease-in-out 
                                                            transform hover:scale-110 style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}" />
                        </a>
                        <a href="https://github.com/cAndrewc" target="_blank">
                            <AiOutlineGithub className="text-black hover:text-[#52504b] text-4xl transition duration-300 ease-in-out 
                                                            transform hover:scale-110 style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}" />
                        </a>
                    </div>

                </div>
                    

            </div>
                

        </div>

        
    )
}

export default AboutMe;