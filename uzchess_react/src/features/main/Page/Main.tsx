import { Outlet } from "react-router";

import Header from "../../shared/components/Header/Header.tsx";
import Footer from "../../shared/components/Footer/Footer.tsx";

export default function MainPage() {

    return (

        <div className="
            min-h-screen
            bg-black
            text-white
            flex
            flex-col
        ">

            <Header />

            <main className="flex-1">

                <Outlet />

            </main>

            <Footer />

        </div>

    );

}