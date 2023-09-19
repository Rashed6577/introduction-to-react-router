import { Link } from 'react-router-dom';
import './user.css'
// eslint-disable-next-line react/prop-types
const User = ({user}) => {

    // eslint-disable-next-line react/prop-types
    const {id, name, email, phone} = user;

    return (
        <div className="user">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;