import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error)

    

    


    return (
        <div>
            <h2>oops!!!</h2>
            <i>{error.statusText || error.massage}</i>
            <br />
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                </div>
            }
            <Link to="/"><button>Go Back Home</button></Link>
        </div>
    );
};

export default Error;