import axios from 'axios'
import { useState, useEffect } from 'react'
// Link provides declarative, accessible navigation around your application.
import {Link} from 'react-router-dom'

// useState returns a stateful value, and a function to update it ex= const [blogs(stateful), setBlog(function)] = useState([])

// useEffect allows you to carry out side effects on functionals componenents. When we use this hook, react needs to do something with the component after rendering

// URI: *Uniform Resource Indentifier*: is used to access a pyshical or abrastact resource over the internet like a webpage or a sender or recipient of an email
const URI = 'http://localhost:420/blogs/'

// In React, components need to be capitalized, without it; useState and useEffect doesnt work.
const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect( () => {
        getBlogs()
    // *[]*, with this we want the code inside useEffect run only once, without this; the code will run on every render 
    }, [])

    // Procedure to show all blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        // Axios return a object
        setBlog(res.data)
    }

    // Procedure to delete a blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus"></i> Create</Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        {/* I use Link instead of anchor tag, because this last one refresh the page, that would reset the application states. */}
                                        <Link to={`/edit/${blog.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-ban"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs