import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useEffect } from "react";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
useEffect(() => {
axios.get("/api/health")
.then(res => console.log(res.data));

},
[]
);
export default App;
