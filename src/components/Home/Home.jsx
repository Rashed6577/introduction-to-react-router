import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Head></Head>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;