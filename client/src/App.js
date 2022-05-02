import logo from "./logo.svg";
import "./App.css";

// Import the components
import CompShowBlogs from "./BLOG/showBlogs";
import CompCreateBlog from "./BLOG/createBlogs";
import CompEditBlog from "./BLOG/editBlogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {/* if we use Link, we need to set the route of that JSX file, if we dont uset; we get an error*/}
          {/* in the element key, just need to pass the JSX file*/}
          <Route path="/" element={<CompShowBlogs />}></Route>
          <Route path="/create" element={<CompCreateBlog />}></Route>
          <Route path="/edit/:id" element={<CompEditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
