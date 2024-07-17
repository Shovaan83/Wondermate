import Header from "../Components/Header";
import Footer from "../Components/footer";
import {Outlet} from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <div className="px-2 sm:px-4 md:px-8 lg:px-20">

                <Header />
                <Outlet/>
                <Footer />
            </div>
        </>
    )
}

export default UserLayout