// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-bold"
//       >
//         Hi, I'm Bilal 👋
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-4 text-xl text-gray-400"
//       >
//        SOFTWARE DEVELOPER | MERN Stack Developer | React Native | Flutter
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="mt-8 space-x-4"
//       >
//         <a href="/projects" className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
//           View Projects
//         </a>
//         <a href="/contact" className="border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500">
//           Contact Me
//         </a>
//       </motion.div>
//     </section>
//   );
// }

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
