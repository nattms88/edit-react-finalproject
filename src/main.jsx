import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Work from "./pages/Work/Work.jsx";
import WorkDetails from "./pages/WorkDetails/WorkDetails.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogPost from "./pages/BlogPost/BlogPost.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/:workId" element={<WorkDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/*" element={<Error />} />
        <Route path="/blog/*" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);