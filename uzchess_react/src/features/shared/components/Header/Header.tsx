import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

interface Language {
    id: number;
    title: string;
    code: string;
}

export default function Header() {

    const [open, setOpen] =
        useState(false);

    const [languages, setLanguages] =
        useState<Language[]>([]);

    const [selectedLanguage, setSelectedLanguage] =
        useState<Language | null>(null);

    const location = useLocation();

    useEffect(() => {

        async function getLanguages() {

                const response =
                    await axios.get(
                        "http://localhost:3001/public/language"
                    );

                setLanguages(
                    response.data.data
                );

                if (
                    response.data.data.length > 0
                ) {

                    setSelectedLanguage(
                        response.data.data[0]
                    );

                }

        }

        getLanguages();

    }, []);

    return (

        <header className="
            w-full
            bg-black
            border-b
            border-[#1A1A1A]
        ">

            {/* CONTAINER */}

            <div className="
                w-full
                max-w-[1700px]
                mx-auto
                px-8
                py-4
            ">

                {/* TOP HEADER */}

                <div className="
                    h-[70px]
                    bg-[#0D0D0D]
                    rounded-2xl
                    px-6
                    flex
                    items-center
                    justify-between
                    border
                    border-[#1F1F1F]
                ">

                    {/* LEFT */}

                    <div className="
                        flex
                        items-center
                        gap-10
                    ">

                        {/* LOGO */}

                        <div className="
                            flex
                            items-center
                            gap-4
                        ">

                            <img
                                src="/uzchess.png"
                                alt="logo"
                                className="
                                    h-10
                                    object-contain
                                "
                            />

                            <div className="
                                w-px
                                h-6
                                bg-[#2A2A2A]
                            " />

                        </div>

                        {/* LANGUAGE */}

                        <div className="relative">

                            <button
                                onClick={() =>
                                    setOpen(!open)
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-white
                                    text-sm
                                "
                            >

                                <span>
                                    {
                                        selectedLanguage?.title
                                    }
                                </span>

                                <img
                                    src={
                                        open
                                            ? "/chevron-2.png"
                                            : "/chevron-1.png"
                                    }
                                    alt="arrow"
                                    className="
                                        w-4
                                        h-4
                                    "
                                />

                            </button>

                            {open && (

                                <div className="
                                    absolute
                                    top-10
                                    left-0
                                    w-[170px]
                                    bg-[#0D0D0D]
                                    border
                                    border-[#1F1F1F]
                                    rounded-xl
                                    overflow-hidden
                                    z-50
                                    shadow-2xl
                                ">

                                    {languages.map(
                                        (lang) => (

                                            <button
                                                key={lang.id}
                                                onClick={() => {

                                                    setSelectedLanguage(
                                                        lang
                                                    );

                                                    setOpen(
                                                        false
                                                    );

                                                }}
                                                className="
                                                    w-full
                                                    text-left
                                                    px-4
                                                    py-3
                                                    text-sm
                                                    text-white
                                                    hover:bg-[#1A1A1A]
                                                    transition
                                                "
                                            >

                                                {lang.title}

                                            </button>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                        {/* NAVBAR */}

                        <nav className="
                            flex
                            items-center
                            gap-8
                            text-[15px]
                            ml-6
                        ">

                            {/* ASOSIY */}

                            <Link
                                to="/"
                                className={`
                                    relative
                                    pb-2
                                    transition
                                    ${
                                    location.pathname === "/"
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                                `}
                            >

                                Asosiy

                                {
                                    location.pathname === "/" && (

                                        <span className="
                                            absolute
                                            left-0
                                            bottom-0
                                            w-full
                                            h-[2px]
                                            bg-[#2EA6FF]
                                        " />

                                    )
                                }

                            </Link>


                            <Link
                                to="/news"
                                className={`
                                    relative
                                    pb-2
                                    transition
                                    ${
                                    location.pathname === "/"
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                                `}
                            >

                                Yangiliklar

                                {
                                    location.pathname === "/news" && (

                                        <span className="
                                            absolute
                                            left-0
                                            bottom-0
                                            w-full
                                            h-[2px]
                                            bg-[#2EA6FF]
                                        " />

                                    )
                                }

                            </Link>

                            {/* KURSLAR */}

                            <Link
                                to="/courses"
                                className={`
                                    relative
                                    pb-2
                                    transition
                                    ${
                                    location.pathname === "/course"
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                                `}
                            >

                                Kurslar

                                {
                                    location.pathname === "/" && (

                                        <span className="
                                            absolute
                                            left-0
                                            bottom-0
                                            w-full
                                            h-[2px]
                                            bg-[#2EA6FF]
                                        " />

                                    )
                                }

                            </Link>

                            {/* KUTUBXONA */}

                            <Link
                                to="/library"
                                className={`
                                    relative
                                    pb-2
                                    transition
                                    ${
                                    location.pathname === "/library"
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                                `}
                            >

                                Kutubxona

                                {
                                    location.pathname === "/library" && (

                                        <span className="
                                            absolute
                                            left-0
                                            bottom-0
                                            w-full
                                            h-[2px]
                                            bg-[#2EA6FF]
                                        " />

                                    )
                                }

                            </Link>

                            {/* BOG‘LANISH */}

                            <Link
                                to="/contact"
                                className={`
                                    relative
                                    pb-2
                                    transition
                                    ${
                                    location.pathname === "/contact"
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                                `}
                            >

                                Bog‘lanish

                                {
                                    location.pathname === "/contact" && (

                                        <span className="
                                            absolute
                                            left-0
                                            bottom-0
                                            w-full
                                            h-[2px]
                                            bg-[#2EA6FF]
                                        " />

                                    )
                                }

                            </Link>

                        </nav>

                    </div>

                    {/* RIGHT */}

                    <div className="
                        flex
                        items-center
                        gap-5
                    ">

                        <Link to="/search">

                            <img
                                src="/search.png"
                                alt="search"
                                className="
                                    w-5
                                    h-5
                                    opacity-80
                                    hover:opacity-100
                                    transition
                                "
                            />

                        </Link>

                        <Link to="/cart">

                            <img
                                src="/cart.png"
                                alt="cart"
                                className="
                                    w-5
                                    h-5
                                    opacity-80
                                    hover:opacity-100
                                    transition
                                "
                            />

                        </Link>

                        <Link to="/notifications">

                            <img
                                src="/bell.png"
                                alt="bell"
                                className="
                                    w-5
                                    h-5
                                    opacity-80
                                    hover:opacity-100
                                    transition
                                "
                            />

                        </Link>

                        <div className="
                            w-px
                            h-6
                            bg-[#2A2A2A]
                        " />

                        {/* KIRISH */}

                        <Link
                            to="/register"
                            className="
                                bg-[#2EA6FF]
                                hover:bg-[#1E96F0]
                                transition
                                px-7
                                py-2.5
                                rounded-xl
                                font-medium
                                flex
                                items-center
                                gap-2
                                text-white
                            "
                        >

                            <span>
                                Kirish
                            </span>

                            <img
                                src="/login.png"
                                alt="login"
                                className="
                                    w-4
                                    h-4
                                "
                            />

                        </Link>

                    </div>

                </div>

            </div>

            {/* BREADCRUMB */}

            <div className="
                w-full
                max-w-[1700px]
                mx-auto
                px-8
                pb-4
            ">

                <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                ">

                    <img
                        src="/home1.png"
                        alt="home"
                        className="
                            w-4
                            h-4
                        "
                    />

                    <span>
                        Asosiy
                    </span>

                    <img
                        src="/chess.png"
                        alt="arrow"
                        className="
                            w-3
                            h-3
                        "
                    />

                    <span className="text-white">

                        {
                            location.pathname === "/"
                                ? "Asosiy"
                                : location.pathname === "/news"
                                    ? "Yangiliklar"
                                    : location.pathname === "/courses"
                                        ? "Kurslar"
                                        : location.pathname === "/library"
                                            ? "Kutubxona"
                                            : location.pathname === "/contact"
                                                ? "Bog‘lanish"
                                                : ""
                        }

                    </span>

                </div>

            </div>

        </header>

    );

}