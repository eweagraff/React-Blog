import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import './index.css';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className="content">
       <Routes>
         <Route exact path = "/" element ={<Home/>}/>
         <Route exact path ="/create" element ={<Create/>}/>
         <Route exact path ="/blogs/:id" element={<BlogDetails/>}/>
        </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
