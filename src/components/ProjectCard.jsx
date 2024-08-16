import React from 'react';

const ProjectCard = ({ title, description, details, imageSrc, tools, imageLeft }) => {
    return (
        <div className={`flex flex-col ${imageLeft ? 'xl:flex-row' : 'xl:flex-row-reverse'} shadow-md hover:shadow-2xl transform transition duration-300 ease-in-out 
                        rounded-lg overflow-hidden mb-8`}>
            <img src={imageSrc} alt={title} className="xl:w-1/3 w-auto h-auto object-cover" />

            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="xl:text-xl text-sm font-bold mb-2">{title}</h3>
                    <p className="xl:text-base text-sm text-gray-600 mb-4">{description}</p>

                    <ul className="list-outside list-disc pl-6 xl:text-base text-sm">

                        {details.map((detail, index) => (

                            <li key={index} className="mb-[5px] text-gray-700">
                                {detail}
                            </li>

                        ))}
                    </ul>

                </div>
                
                <div className="flex items-start mt-4">

                    <div className="flex space-x-2">
                        {tools.map((tool, index) => (

                            <div key={index} className="flex items-center justify-center rounded-full xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] bg-[#fafafa]
                                                        shadow-md hover:shadow-xl transform transition duration-300 ease-in-out ">
                                <img src={tool} alt="Tool" className="xl:w-[30px] xl:h-[30px] w-[20px] h-[20px] object-contain" />
                            </div>

                        ))}
                    </div>

                </div>

                
            </div>
        </div>
    );
};

export default ProjectCard;
