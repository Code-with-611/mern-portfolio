export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">Contact Me</h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Your Name" />
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Your Email" />
        <textarea className="w-full p-3 rounded bg-gray-800" placeholder="Your Message" />
        <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
