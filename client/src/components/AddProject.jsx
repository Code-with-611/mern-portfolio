import { useState } from "react";
import axios from "axios";

export default function AddProject({ fetchProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("github", github);
    formData.append("image", image);

    try {
      setLoading(true);
      await axios.post("/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTitle("");
      setDescription("");
      setGithub("");
      setImage(null);
      fetchProjects(); // refresh list
    } catch (err) {
      console.error(err);
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
          placeholder="Title"
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
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}