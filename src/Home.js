import { useState, useEffect } from "react"
import Bloglist from './Bloglist'

const Home = () => {
const title = "Tips"

const [blogs, setBlogs] = useState([
    {title: 'Keeping rattlesnake plant shaded', body:"I like to garden", author: "Emily", id: 1},
    {title: 'Gardening 101', body:"Gardening is cool", author: "Michael", id: 2},
    {title: 'Gardening 101', body:"I love plants", author: "Emily", id: 3},



]);

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
}

useEffect(() => {
console.log("use effect ran")
})


return (  

        <div className="home">
           <Bloglist blogs={blogs} title={title}  handleDelete={handleDelete}/>
           
        </div>
    )};

 
export default Home;