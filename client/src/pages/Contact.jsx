// import { API } from "../api";

// export default function Contact() {
//   const submit = async e => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.target));
//     await API.post("/contact", data);
//     alert("Message Sent");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input name="name" placeholder="Name" />
//       <input name="email" placeholder="Email" />
//       <textarea name="message" placeholder="Message" />
//       <button>Send</button>
//     </form>
//   );
// }


// import api from "../services/api";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   await api.post("/contact", { name, email, message });
// };

// export default function Contact() {
//   return (
//     <div className="p-10 bg-gray-950 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

//       <form className="max-w-md space-y-4">
//         <input className="w-full p-2 bg-gray-800" placeholder="Name" />
//         <input className="w-full p-2 bg-gray-800" placeholder="Email" />
//         <textarea className="w-full p-2 bg-gray-800" placeholder="Message" />
//         <button className="bg-blue-600 px-6 py-2 rounded">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contact", formData);
    setSent(true);
  };

  return (
    <div className="p-10 min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        {sent ? (
          <p className="text-green-400 text-center">Message sent successfully 🚀</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input className="w-full p-2 bg-gray-800 rounded" placeholder="Name"
              onChange={e => setFormData({...formData, name: e.target.value})} />
            <input className="w-full p-2 bg-gray-800 rounded" placeholder="Email"
              onChange={e => setFormData({...formData, email: e.target.value})} />
            <textarea className="w-full p-2 bg-gray-800 rounded" placeholder="Message"
              onChange={e => setFormData({...formData, message: e.target.value})} />
            <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
