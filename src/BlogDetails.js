import { useParams, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();


    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
           
        }).then(()=> {
        navigate('/');

        })
    };

   return (  
        <div className="blog-details">
            {error && <div> {error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleClick}>Delete</button>

                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;