import { useLoaderData, useNavigate } from "react-router-dom";
import "./postDetails.css"

const PostDetails = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const postDetails = useLoaderData();
    const {id, title, body} = postDetails;

    return (
        <div className="postDetails">
            <h2>Post Details About: {id}</h2>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;