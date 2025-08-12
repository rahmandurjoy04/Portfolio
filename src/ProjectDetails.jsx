import React from 'react';
import { useParams } from 'react-router';
import projects from "../src/assets/projectsData.json"

const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="container mx-auto p-10 text-center">
                <h2 className="text-3xl font-bold">Project not found</h2>
                <a href="/#projects"
                    className="inline-block mt-4 bg-primary text-black py-2 px-6 rounded hover:bg-primary/80 transition-colors duration-300"
                >
                    Back to Projects
                </a>
            </div>
        );
    }

    return (
        <section className="mx-auto py-8 max-w-11/12 min-w-sm">
            <h1 className="text-4xl font-bold mb-8 text-center">{project.name}</h1>
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left side: Image + Tech stack */}
                <div className="md:w-1/2 flex flex-col items-center space-y-6">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-lg shadow-lg w-full  object-cover"
                    />
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                        <div className="flex flex-wrap gap-3 text-black">
                            {project.techStack.map((tech) => (
                                <p className='border px-2 py-1 bg-primary rounded-md' key={tech}>{tech}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side: Other details */}
                <div className="md:w-1/2 space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{project.description}</p>
                    </div>

                    <div className='flex gap-3'>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary text-black "
                        >
                            Live Project
                        </a>

                        <a
                            href={project.githubClient}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary text-black "
                        >
                            GitHub Repository
                        </a>
                    </div>

                   

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                        <p className="text-gray-700">{project.challenges}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Improvements & Future Plans</h2>
                        <p className="text-gray-700">{project.improvements}</p>
                    </div>

                    <a href="/#projects"
                        className="btn inline-block mt-4 btn-primary text-black py-2 px-6 rounded  duration-300"
                    >
                        Back to Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
