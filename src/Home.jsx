import { isAdmin } from "./authService";
import HomeLogin from "./HomeLogin";
import HomeLogout from "./HomeLogout";

const Home = () => {
    return (
        <>
            {!isAdmin() && <HomeLogin />}
            {isAdmin() && <HomeLogout />}
        </>
    )
}

export default Home;