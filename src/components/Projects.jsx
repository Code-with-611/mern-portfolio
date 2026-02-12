import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const res = await axios.get(`${API}/api/projects`);
await axios.delete(`${API}/api/projects/${id}`);

// AddProject component for adding new projects
function AddProject({ fetchProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("github", github);
    formData.append("live", live);
    formData.append("image", image);

    try {
      setLoading(true);
      await axios.post("/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Reset form
      setTitle("");
      setDescription("");
      setGithub("");
      setLive("");
      setImage(null);

      // Refresh project list
      fetchProjects();
    } catch (err) {
      console.error("Error adding project", err);
      alert("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
          required
        />

        <input
          type="text"
          placeholder="GitHub Link"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <input
          type="text"
          placeholder="Live Link (optional)"
          value={live}
          onChange={(e) => setLive(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}

// Main Projects component
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error("Error deleting project", err);
      alert("Failed to delete project");
    }
  };

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900">
      {/* ADD PROJECT FORM */}
      <AddProject fetchProjects={fetchProjects} />

      {/* PROJECTS GRID */}
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col"
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
            )}

            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 flex-1">{project.description}</p>

            <div className="flex gap-3 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 text-white px-3 py-1 rounded"
                >
                  GitHub
                </a>
              )}

              {/* {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Live
                </a>
              )} */}

            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => deleteProject(project._id)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-4 w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}