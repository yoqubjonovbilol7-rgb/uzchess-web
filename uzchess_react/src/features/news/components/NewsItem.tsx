import React from "react";

interface NewsItemProps {
    image: string;
    date: string;
    title: string | React.ReactNode;
}

function NewsItem({image, date, title,}: NewsItemProps) {

    const newsDate = new Date(date);

    const months = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
    ];

    const formattedDate = `${months[newsDate.getMonth()]} ${newsDate.getDate()}, ${newsDate.getFullYear()}`;

    return (
        <article className=" bg-[#0D0D0D] rounded-[12px] p-3 flex flex-col gap-3 border border-[#23262F]">
            <img src={image} alt="news" className="w-full h-[140px] object-cover object-center rounded-[8px]"/>
            <section className="flex flex-col gap-2">

                <p className="text-[#6F767E] text-[11px]">{formattedDate}</p>

                <button className="text-left group">

                    <h2 className="text-white text-[14px] font-semibold leading-5 line-clamp-2 group-hover:text-[#2EA6FF]
                            transition ">{title}</h2>

                </button>

                <p className="text-[#9DA1A3] text-[12px] leading-5 line-clamp-2">
                    O‘zbekistonlik yosh grossmeyster
                    Turkiyada o‘tkazilgan shaxmat
                    olimpiadasida ikkita g‘alabaga
                    erishdi...
                </p>
            </section>
        </article>
    );
}

export default NewsItem;