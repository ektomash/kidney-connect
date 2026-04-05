import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Funds from "./pages/Funds";
import Advice from "./pages/Advice";
import KidsZone from "./pages/KidsZone";
import KidsLesson from "./pages/KidsLesson";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/advice/kids" element={<KidsZone />} />
          <Route path="/advice/kids/:lessonKey" element={<KidsLesson />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
