
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-500">Portfolio</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
