import { Link, NavLink } from 'react-router-dom';
import './head.css'

const Head = () => {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/users">Users</Link>
            </ul>
        </div>
    );
};

export default Head;