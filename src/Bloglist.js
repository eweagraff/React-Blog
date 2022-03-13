const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const tips = props.tips;
    
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
                <pi>{tips}</pi>

                </div>
             ))}
                </div>

       
    );
}
 
export default Bloglist;