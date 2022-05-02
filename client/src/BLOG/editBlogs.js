import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:420/blogs/";

const CompEditBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  // Procedure to update
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      content: content
    });
    navigate("/");
  }

  useEffect( () => {
    getBlogById()
  }, [])

  const getBlogById = async () => {
    const result = await axios.get(URI + id);
    setTitle(result.data.title)
    console.log(result.data.title)
    setContent(result.data.content)
    console.log(result.data.content)
  };

  return (
    <div>
      <h3>Edit BLOG</h3>
      {/* Save all when the sumbit its realize*/}
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default CompEditBlog;
