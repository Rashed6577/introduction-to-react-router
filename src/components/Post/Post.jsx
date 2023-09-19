import { Link } from "react-router-dom";
import "./post.css"
// eslint-disable-next-line react/prop-types
const Post = ({post}) => {

    // eslint-disable-next-line react/prop-types
    const {id, title} = post;

    return (
        <div className="post">
            <h3>User Id: {id}</h3>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;