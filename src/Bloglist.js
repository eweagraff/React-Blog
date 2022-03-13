const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
  
    
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>
                    {blog.title}
                </h2>
                <h3>Written by: {blog.author} </h3>
                <p>{blog.body} </p>
                <button className="button" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                

                </div>
             ))}
                </div>

       
    );
}
 
export default Bloglist;