const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    
    const handleDelete = props.handleDelete;
  
    
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.body} </h2>
                <p>Written by: {blog.author} </p>
                <button className="button" onClick={() => handleDelete(blog.id)}>Delete Tip</button>
                

                </div>
             ))}
                </div>

       
    );
}
 
export default Bloglist;