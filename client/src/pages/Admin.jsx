import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
    
  if (!localStorage.getItem("token")) {
  window.location.href = "/admin-login";
}
  useEffect(() => {
    axios.get("http://localhost:5000/api/contact").then(res => setMessages(res.data));
    axios.get("http://localhost:5000/api/projects").then(res => setProjects(res.data));
  }, []);

  
  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-6">Admin Dashboard</h2>

      <h3 className="text-xl mb-2">Messages</h3>
      {messages.map(m => (
        <div key={m._id} className="bg-gray-800 p-4 mb-2 rounded">
          <p>{m.name} — {m.email}</p>
          <p className="text-gray-400">{m.message}</p>
        </div>
      ))}

      <h3 className="text-xl mt-6 mb-2">Projects</h3>
      {projects.map(p => (
        <div key={p._id} className="bg-gray-800 p-4 mb-2 rounded">
          {p.title}
        </div>
      ))}
    </div>
  );
}

export default function AddProject() {
  const [project, setProject] = useState({ title: "", description: "", techStack: "", githubLink: "", liveLink: "" });
  const [image, setImage] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(project).forEach(key => formData.append(key, project[key]));
    if (image) formData.append("image", image);

    await axios.post("http://localhost:5000/api/projects", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Project Added!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input placeholder="Title" onChange={e => setProject({ ...project, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setProject({ ...project, description: e.target.value })} />
      <input placeholder="Tech Stack (comma separated)" onChange={e => setProject({ ...project, techStack: e.target.value.split(",") })} />
      <input placeholder="Github Link" onChange={e => setProject({ ...project, githubLink: e.target.value })} />
      <input placeholder="Live Link" onChange={e => setProject({ ...project, liveLink: e.target.value })} />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button className="bg-blue-600 px-4 py-2 rounded text-white">Add Project</button>
    </form>
  );
}