// The controllers folder have the functions to get the requested data from the models, create a page displaying the data and return it to the user un the browser

// Import the model
import blogModel from "../models/blogModel.js";

// :Methods for the CRUD: //
// Show all registers
export const getAllBlogs = async (req, res) => {
  try {
    // I use an async function to get a Promise, when the async function returns a value, Promise get resolve with the value returned
    const blogs = await blogModel.findAll();
    console.log(blogs)
    res.json(blogs);
  } catch (error) {
    // if we get an error, then response with a message with the error
    res.json({ message: error.message });
  }
};

// Show a register
export const getBlog = async (req, res) => {
  try {
    // I use the same findall method, but this time i use the where clause to search an specific element in the table ("id" in this case)
    const blog = await blogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    // Return the element in the first position of the array
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Create a register
export const createBlog = async (req, res) => {
    try {
        await blogModel.create(req.body)
        res.json({"message": "Register completed!"})
    } catch (error) {
        res.json({ message: error.message})
    }
}

// Update a register
export const updateBlog = async (req, res) => {
    try {
        // if i want to update, i need to specify what element want to udpate. Again, i use where clause and pass the id of the element
        await blogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({"message": "Update completed!"})
    } catch (error) {
        res.json({ message: error.message})
    }
}

// Delete a register
export const deleteBlog = async (req, res) => {
    try {
        // Again i use the where clause to specify the element that i want to delete
        await blogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message": "Element Deleted!"})
    } catch (error) {
        res.json({ message: error.message})
    }
}