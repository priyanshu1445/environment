import React from 'react';
import { Link } from 'react-router-dom';

const categorizedProjects = {
  "Environment Impact Assessment and Management Plan": [
    {
      id: 1,
      title: 'Skyline Towers',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      description: 'A modern residential complex with sustainable design and energy-efficient systems.',
    },
    {
      id: 2,
      title: 'Green Valley Township',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
      description: 'Eco-friendly township development adhering to EIA regulations.',
    },
  ],
  "Forest Clearance": [
    {
      id: 3,
      title: 'Highland Highway Expansion',
      location: 'Himachal Pradesh, India',
      image: 'https://images.unsplash.com/photo-1565373620131-4be9f3de7887?auto=format&fit=crop&w=800&q=80',
      description: 'Infrastructure project requiring forest diversion and clearance documentation.',
    },
    {
      id: 4,
      title: 'Eastern Power Line Project',
      location: 'Odisha, India',
      image: 'https://images.unsplash.com/photo-1581090700227-1e8b69c8a15f?auto=format&fit=crop&w=800&q=80',
      description: 'Forest clearance obtained for transmission lines through protected forest area.',
    },
  ],
  "Environment Monitoring": [
    {
      id: 5,
      title: 'Steel Plant Emission Audit',
      location: 'Jamshedpur, India',
      image: 'https://images.unsplash.com/photo-1621987042917-0a092a92b3f3?auto=format&fit=crop&w=800&q=80',
      description: 'Quarterly monitoring of air, noise, and water emissions in a steel plant.',
    },
    {
      id: 6,
      title: 'Construction Site Monitoring',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1615398939515-e7956c1ba6c9?auto=format&fit=crop&w=800&q=80',
      description: 'Regular environmental checks for dust, runoff, and noise control.',
    },
  ],
  "Other Projects": [
    {
      id: 7,
      title: 'Industrial Waste Management Plan',
      location: 'Pune, India',
      image: 'https://images.unsplash.com/photo-1581090408411-0d815ed1f916?auto=format&fit=crop&w=800&q=80',
      description: 'Planning and implementation of zero-discharge waste strategy.',
    },
    {
      id: 8,
      title: 'Solar Plant Impact Study',
      location: 'Rajasthan, India',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      description: 'Biodiversity and environmental impact assessment of large-scale solar installation.',
    },
  ],
};

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Projects
        </h1>

        {Object.entries(categorizedProjects).map(([category, projects]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-semibold text-green-700 mb-8 border-l-4 border-green-500 pl-4">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                    <p className="text-gray-700 line-clamp-3">{project.description}</p>
                    <span className="mt-4 inline-block text-green-700 hover:text-green-900 font-medium">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
