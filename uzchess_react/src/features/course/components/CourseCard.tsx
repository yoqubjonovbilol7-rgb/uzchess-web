// CourseCard.tsx

import axios from "axios";
import { useState } from "react";

interface Course {
    id: number;
    title: string;
    image: string;
    price: number;
    newPrice: number;
    rating: number;
    lessonsCount: number;

    author?: {
        fullName: string;
    };

    language?: {
        code: string;
    };

    difficulty?: {
        title: string;
        icon: string;
    };

    category?: {
        title: string;
    };
}

interface Props {
    course: Course;
}

export default function CourseCard({ course }: Props) {

    const [liked, setLiked] = useState(false);

    async function handleLike() {

        const token = localStorage.getItem("token");

        await axios.post(
            `http://localhost:3001/public/course-like/${course.id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        setLiked(!liked);
    }

    return (
        <div
            className="
                w-full
                bg-[#1A1D1F]
                border border-[#232627]
                rounded-2xl
                p-5
                flex items-center gap-5
                hover:border-[#2196F3]
                transition-all
            "
        >

            <div className="relative">

                <img
                    src={course.image}
                    alt={course.title}
                    className="
                        w-[300px]
                        h-[200px]
                        rounded-xl
                        object-cover
                    "
                />

                <div
                    className="
                        absolute
                        top-3
                        left-3

                        border border-[#374151]
                        rounded-lg
                        px-3
                        py-1
                        text-yellow-400
                        text-sm
                        font-semibold
                    "
                >
                    ⭐ {course.rating}
                </div>

                <div
                    className="
                    absolute
                        bottom-3
                        left-3
                        bg-[#1A1D1F]
                        border-[#232627]
                        rounded-lg
                        px-3
                        py-1
                        text-white
                        text-sm
                    "
                >
                    {course.language?.code || "UZ"}
                </div>

            </div>

            <div className="flex-1">

                <h2 className="text-white text-[36px] font-bold mb-2">
                    {course.title}
                </h2>

                <p className="text-gray-400 text-xl mb-4">
                    {course.author?.fullName }
                </p>

                <div className="mb-5">

                    {Number(course.price) !== Number(course.newPrice) && (
                        <p className="text-gray-500 line-through text-lg">
                            {Number(course.price).toLocaleString()} uzs
                        </p>
                    )}

                    <p className="text-[#84CC16] text-[38px] font-bold">
                        {Number(course.newPrice) === 0
                            ? "Bepul kurs"
                            : `${Number(course.newPrice).toLocaleString()} uzs`}
                    </p>

                </div>

                <div
                    className="
                        flex items-center justify-between
                        border-t border-[#1F2937]
                        pt-5
                    "
                >

                    <div className="flex items-center gap-8 text-gray-400 text-lg">

                        <div className="flex items-center gap-2">

                            {course.difficulty?.icon && (

                                <img
                                    src={`http://localhost:3001/${course.difficulty.icon.replace(/\\/g, "/")}`}
                                    alt="difficulty"
                                    className="w-5 h-5 object-contain"
                                />

                            )}

                            <span>{course.difficulty?.title}</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <img
                                src="/student_center.png"
                                alt=""
                                className="w-5 h-5"
                            />

                            <span>
                                {course.lessonsCount} ta bo'lim
                            </span>

                        </div>

                        <div className="flex items-center gap-2">

                            <img
                                src="/grid1.png"
                                alt=""
                                className="w-5 h-5"
                            />

                            <span>
                                {course.category?.title || "Strategiya"}
                            </span>

                        </div>

                    </div>

                    <button
                        onClick={handleLike}
                        className="
                            hover:scale-125
                            transition-all
                        "
                    >

                        <img
                            src={
                                liked
                                    ? "/heart-red.png"
                                    : "/heart-outline.png"
                            }
                            alt="heart"
                            className="w-8 h-8"
                        />

                    </button>

                </div>

            </div>

        </div>
    );
}