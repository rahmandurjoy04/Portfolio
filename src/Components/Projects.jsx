import React from 'react';
import { Link } from 'react-router';
import projects from '../assets/projectsData.json'

const Projects = () => {

  return (
    <section className="bg-base-100 py-16 mt-4 max-w-11/12 mx-auto">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full rounded-t-xl h-48 border-b"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-block bg-primary py-2 px-4 rounded-full hover:bg-primary/80 transition-colors duration-300"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;