import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
       
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/')
        })

    }
    return (  
       <div className="create">
           <h2>Add a New Tip</h2>
           <form onSubmit={handleSubmit}> 
               <label>Title:</label>
               <input 
               type ="text"
               required
               value ={title}
               onChange={(e) => setTitle(e.target.value)}/>
               <label>Body:</label>
               <textarea 
               required
               value={body}
               onChange={(e)  => setBody(e.target.value)}

               ></textarea>
               <label>Author:</label>
               <textarea 
               required
               value={author}
               onChange={(e) => setAuthor(e.target.value)} >
                   </textarea>
               <button >Add a New Tip</button>
           </form>
       </div>
    );
}
 
export default Create;