import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import ".//UserDetails.css"
const UserDetails = () => {

    const { userId } = useParams();
    console.log(userId)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const userDetails = useLoaderData();
    const { name, email, phone, website } = userDetails;


    return (
        <div className="details">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Visit Us: <Link>{website}</Link></p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;