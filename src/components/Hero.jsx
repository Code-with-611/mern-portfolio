export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Muhammad Bilal Qayyum</span>
      </h2>
      <p className="text-gray-400 max-w-xl">
        Full Stack Developer | Building modern Web & Mobile applications 
      </p>
    <a 
      href="#projects"
      className="bg-blue-600 px-6 py-3 rounded text-white inline-block mt-8 transition transform hover:scale-105"
    >
      View My Projects
    </a>
    </section>
  );
}
