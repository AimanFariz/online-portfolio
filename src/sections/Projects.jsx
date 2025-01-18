import React from 'react';
import { personalProjects } from '../constants';

function Projects() {
  return (
    <div className="max-w-7xl lg:mx-auto mx-5 flex flex-col justify-center c-space bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 py-10 rounded-lg" id='projects'>
      <h2 className="text-3xl font-bold text-gray-100 text-center my-10">
        Personal Projects
      </h2>
      <p className='text-gray-300 text-center mb-10'>A collection of some of my side projects and Medium articles</p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {personalProjects.map((project) => (
          <a href={project.link} target="_blank">
            <div
            key={project.id}
            className="rounded-lg shadow-lg overflow-hidden bg-white expand-hover">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mx-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{project.category}</p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
