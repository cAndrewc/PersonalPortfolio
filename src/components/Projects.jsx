import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Olostep Web Scraper Website",
        description: "Implemented a website that allowed users to input a URL to web scrape, outputting both clean and unclean data with a team of 3 as part of Headstarter's hackathon.",
        details: [
            "Asissted in the implementation of the web scraper logic and improved upon it, allowing for scraping of diverse websites",
            "Integrated MongoDB to store and manage the scraped data",
        ],
        imageSrc: "./assets/olostep.png",
        tools: ["./assets/python.webp", "./assets/cheerio.svg", "./assets/puppeteer.png", "./assets/mongodb.png"],
        imageLeft: false,
    },
    {
        title: "Movie Database Application",
        description: "Built with a team, made the conceptual data model using a EER diagram, ER diagram, and reduction of tables. Performed Exploratory Data Analysis (EDA) and generated charts and utilized analytic tools ",
        details: [
            "Implemented a robust friend system, enabling users to connect with others, share movie recommendations, and explore their preferences using an integrated playlist feature",
            "Architected and deployed a robust PostgreSQL database in a team environment, efficiently storing over 100,000 movies, encompassing essential metadata",
            "Developed key functionalities, including a recommendation system that suggests movies based on the user and their friends’ ratings and watched genres / movies"
        ],
        imageSrc: "./assets/database.png",
        tools: ["./assets/python.webp", "./assets/postgresql.png"],
        imageLeft: true,
    },
    {
        title: "U-Fund Website",
        description: "Developed with a team, planned Sprints using Trello and Slack. Planned website out using UML diagrams, Sequence diagrams, ER diagrams. Utilized the SCRUM process, velocity, and planning pokers",
        details: [
            "Developed a site enabling users to support a cause by purchasing products and services to help enhance user engagement and contribution",
            "Designed and implemented a user-friendly and responsive frontend utilizing Angular and CSS, ensuring seamless integration with the backend",
            " Collaborated with teammates to develop backend functionalities, contributing to the backend testing and core functions using Java"
        ],
        imageSrc: "./assets/web.jpg",
        tools: ["./assets/angular.webp", "./assets/css.webp", "./assets/java.png"],
        imageLeft: false,
    },
];

function Projects() {
    return (
        <div id="Projects">

            <div className="flex items-center xl:pl-[300px] xl:pr-[300px] pl-6 pr-6 md:pt-[40px] pt-[30px]">
                <h2 className="md:text-4xl text-2xl font-medium text-[#545353]">Projects</h2>
                <div className="flex-grow border-t-2 border-gray-300 ml-3" style={{ marginTop: '0.6em', maxWidth: '1200px' }}></div>
            </div>

            <div className="xl:pl-[300px] xl:pr-[300px] pl-6 pr-6 md:pt-[20px] pt-[15px]">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        details={project.details}
                        imageSrc={project.imageSrc}
                        tools={project.tools}
                        imageLeft={project.imageLeft}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
