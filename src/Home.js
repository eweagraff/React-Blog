import Bloglist from './Bloglist'
import useFetch from './useFetch'


const Home = () => {
const {data: blogs, error} = useFetch('http://localhost:8000/blogs')






return (  

        <div className="home">
            {error && <div> {error}</div>}
           {blogs && <Bloglist blogs={blogs} title="Current Tips"/>}
           <iframe width ="420" height ="315"title ="video"src="https://www.youtube.com/embed/MBkYD2HLy34"></iframe>
        </div>
        
    )};

 
export default Home;