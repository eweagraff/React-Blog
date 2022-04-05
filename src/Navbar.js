const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Gardening Tips </h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: "teal",
                    borderRadius: "8px"
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "teal",
                    borderRadius: "8px"
                }}>New Tip</a>
            </div>
        </nav>
    );
}
 
export default Navbar;