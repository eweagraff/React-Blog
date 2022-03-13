import { useState } from "react"
import Bloglist from './Bloglist'

const Home = () => {
const [blogs, setBlogs] = useState([
    {title: 'Gardening 101', body:"I like to garden", author: "Emily", id: 1},
    {title: 'Gardening 101', body:"Gardening is cool", author: "Emily", id: 2},
    {title: 'Gardening 101', body:"I love plants", author: "Emily", id: 3},

]);


       

    return (  
        <div className="home">
           <Bloglist blogs={blogs} title="Blog Titles" />
           
        </div>
    )};

 
export default Home;