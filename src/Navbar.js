import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Plant Tips and Tricks </h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "teal",
                    borderRadius: "8px"
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "teal",
                    borderRadius: "8px"
                }}>New Tip</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;