import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:420/blogs/";

const CompCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // Procedure to save
  const store = async (e) => {
    // Cancell the event if this can be cancel, without stopping the operation of the event
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    // Once its save, send us to this path route
    navigate("/");
  };

  return (
    <div>
      <h3>Create Blog</h3>
      {/* Save all when the sumbit its realize*/}
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          {/* We capture the value that its put in this input*/}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          {/* We capture the value that its put in this input*/}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CompCreateBlog;
