import React, { useState, useRef } from 'react';

function Experience() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRef = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const experiences = [
        {
            title: "RIT ITS",
            role: "ITS Communications Support",
            date: "November 2023 - Present",
            description: "Conducted network jack activations / troubleshooting, fax line disconnects, and phone / phone line troubleshooting. Utilized ServiceNow to help communicate and resolve customer issues. Documented incidents to use as training material for new employees and reference for future customers",
            details: [
                "Worked proactively with a team to help support 20,000+ staff and students, ensuring seamless operation and maintenance of campus voice and data networks",
                "Assisted customers with resolving their voice and network issues, ensuring minimal downtime",
            ]
        },
        {
            title: "Headstarter",
            role: "Software Engineering Fellow",
            date: "July 2024 - September 2024",
            description: "A 7-week software engineering fellowship consisting of building projects, participating in hackathons, interview prepraration, getting feedback and advice from seasoned software engineers, and a final project with the aim of getting 1,000+ users.",
            details: [
                "Built and deployed 5 AI projects in 5 weeks with 3 fellows utlizing React, NextJS, Firebase, Clerk, and Vercel, following agile methodologies and CI/CD practices for iterative development",
                "Implemented a web scraper that automatically extracts data from Rate my Professor and upsert to a Pinecone index, integrated with a RAG pipeline using LangChain and OpenAI GPT-4o",
                "Participated in weekly sessions with engineers from Google, Amazon, Stanford, and venture-backed startups"
            ]
        },
        {
            title: "Microsoft Technology Campus (SCIP)",
            role: "Website Intern",
            date: "December 2021 - March 2022",
            description: "Made possible through SYEP's WLG program and SCIP's Winter Fellows Program",
            details: [
                "Collaborated with a team to design website pages, participating in regular meetings to discuss and refine ideas",
                "Gained extensive knowledge in UI/UX and designing, creating user-friendly and visually appealing web pages",
            ]
        }
    ];

    return (
        <div id="Experience">

            <div className="flex items-center xl:pl-[300px] xl:pr-[300px] pl-6 pr-6 md:pt-[50px] pt-[30px] pb-[10px]">
                <h2 className="md:text-4xl text-2xl font-medium text-[#545353]">Experience</h2>
                <div className="flex-grow border-t-2 border-gray-300 ml-3" style={{ marginTop: '0.6em', maxWidth: '1200px' }}></div>
            </div>

            {experiences.map((exp, index) => (
                <div key={index} className="my-2 xl:pl-[300px] xl:pr-[300px] pl-[30px] pr-[30px]">
                    <div 
                        onClick={() => toggleExpand(index)} 
                        className="cursor-pointer border rounded-md p-4 transition-all duration-300 ease-in-out hover:bg-gray-100">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="xl:text-xl text-sm font-semibold">{exp.role} |<span className="xl:text-xl text-sm text-[#878787]"> {exp.title}</span></h3>
                                <p className="xl:text-base text-xs text-gray-500">{exp.date}</p>
                            </div>

                            <div className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>

                        </div>

                        <div
                            ref={(el) => (contentRef.current[index] = el)}
                            style={{
                                maxHeight: expandedIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0px',
                            }}
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
                        >
                            <div className="mt-2 text-gray-600 xl:text-base text-sm">
                                <p>{exp.description}</p>

                                <ul className="list-outside list-disc xl:pl-12 pl-6 mt-[10px]">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="xl:mt-[5px] mt-[1px]">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
