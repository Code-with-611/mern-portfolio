import { useEffect, useState } from "react";
import api from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-10 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div key={p._id} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.description}</p>
            <p className="text-sm text-blue-400 mt-3">{p.techStack.join(", ")}</p>
            <div className="mt-4 flex gap-4">
              <a href={p.liveLink} target="_blank" className="text-green-400">Live</a>
              <a href={p.githubLink} target="_blank" className="text-yellow-400">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
