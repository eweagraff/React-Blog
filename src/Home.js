import Bloglist from './Bloglist'
import useFetch from './useFetch'


const Home = () => {
const {data: blogs, error} = useFetch('http://localhost:8000/blogs')






return (  

        <div className="home">
            {error && <div> {error}</div>}
           {blogs && <Bloglist blogs={blogs} title="Current Tips"/>}
         
        </div>
        
    )};

 
export default Home;