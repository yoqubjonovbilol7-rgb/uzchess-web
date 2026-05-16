import axios from "axios";
import { useEffect, useState } from "react";
import NewsBookItem from "../components/NewsBookItem.tsx";
import NewsItem from "../components/NewsItem.tsx";
import Search from "../components/Search.tsx";

interface Item {
    id: number;
    title: string;
    date: string;
    image: string;
}

export default function NewsPage() {

    const [news, setNews] =
        useState<Item[]>([]);

    const [search, setSearch] =
        useState("");

    const [visibleCount, setVisibleCount] =
        useState(6);

    useEffect(() => {

        async function getAllNews() {

            try {

                const response =
                    await axios.get(
                        "http://localhost:3001/public/news"
                    );

                const fixedData =
                    response.data.data.map((item: Item) => ({
                        ...item,
                        image: item.image
                    }));

                setNews(fixedData);

            } catch (error) {

                console.log(error);

            }

        }

        getAllNews();

    }, []);

    const filteredNews = news.filter((item) =>
        item.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const highlightText = (
        text: string,
        search: string
    ) => {

        if (!search) return text;

        const parts = text.split(
            new RegExp(`(${search})`, "gi")
        );

        return parts.map((part, index) =>

            part.toLowerCase() ===
            search.toLowerCase() ? (

                <span
                    key={index}
                    className="
                        bg-yellow-400
                        text-black
                        px-1
                        rounded
                    "
                >
                    {part}
                </span>

            ) : (
                part
            )
        );
    };

    return (

        <div className="container mx-auto flex flex-col lg:flex-row gap-6
            px-4
            py-6
            flex-1
        ">

            <section className="flex-1">

                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                    mb-6
                ">

                    <h1 className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        text-white
                    ">
                        Yangiliklar
                    </h1>

                    <Search
                        search={search}
                        setSearch={setSearch}
                    />

                </div>

                {filteredNews.length > 0 ? (

                    <>

                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            xl:grid-cols-3
                            gap-5
                        ">

                            {filteredNews
                                .slice(0, visibleCount)
                                .map((item) => (

                                    <NewsItem
                                        key={item.id}
                                        date={item.date}
                                        image={item.image}
                                        title={
                                            highlightText(
                                                item.title,
                                                search
                                            )
                                        }
                                    />

                                ))}

                        </div>

                        {filteredNews.length > 6 && (

                            <div className="
                                w-full
                                flex
                                justify-center
                                mt-8
                            ">

                                <button
                                    onClick={() => {

                                        if (
                                            visibleCount >=
                                            filteredNews.length
                                        ) {

                                            setVisibleCount(6);

                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });

                                        } else {

                                            setVisibleCount(
                                                (prev) => prev + 6
                                            );

                                        }

                                    }}
                                    className="
                                        px-6
                                        py-2
                                        bg-[#1A1D21]
                                        text-[#B1B5C3]
                                        text-sm
                                        rounded-md
                                        hover:bg-[#23262F]
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {visibleCount >=
                                    filteredNews.length
                                        ? "Kamroq"
                                        : "Ko‘proq"
                                    }

                                </button>

                            </div>

                        )}

                    </>

                ) : (

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        py-20
                    ">

                        <img
                            src="/Frame.png"
                            alt="not found"
                            className="
                                w-[250px]
                                sm:w-[300px]
                                object-contain
                            "
                        />

                    </div>

                )}

            </section>

            <aside className="
                w-full
                lg:w-[320px]
                hidden
                lg:block
                pt-[70px]
                shrink-0
            ">

                <div className="
                    bg-[#0D0D0D]
                    border
                    border-[#1A1A1A]
                    rounded-2xl
                    p-5
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-5
                    ">

                        <h2 className="
                            font-semibold
                            text-xl
                            text-white
                        ">
                            Top kitoblar
                        </h2>

                        <button
                            className="
                                text-sm
                                text-gray-400
                                hover:text-white
                                transition
                                cursor-pointer
                            "
                        >
                            Barchasi ›
                        </button>

                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-5
                    ">

                        <NewsBookItem
                            image="b2bfa98f14b7816c6d6c6a3e6815b29449f09415.png"
                            title="Shaxmatdagi qobiliyatingizga qayta baho bering"
                            author="J.Silmon"
                        />

                        <NewsBookItem
                            image="a3d571f5e3d315ed54d2a4b920914d0b7337ee43.png"
                            title="Mening tizimim"
                            author="A.Nimzowitsch"
                        />

                        <NewsBookItem
                            image="08b36d301019f18f6d957da01a0553e1e0ed14f0.png"
                            title="Zurixdagi shaxmat musobaqasi"
                            author="D.Bronstein"
                        />

                        <NewsBookItem
                            image="1413fa5baf99834deb86841d0815ee89da6d7f92.png"
                            title="Mening esda qolarli o‘yinlarim"
                            author="B.Fischer"
                        />

                    </div>

                </div>

            </aside>

        </div>

    );

}