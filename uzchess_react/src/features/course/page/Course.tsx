import axios from "axios";
import { useEffect, useState } from "react";

import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import CourseFilter from "../components/CourseFilter";

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
        title: string;
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

export default function CoursePage() {

    const [courses, setCourses] = useState<Course[]>([]);

    const [search, setSearch] = useState("");

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);

    useEffect(() => {

        async function getCourses() {

            const response = await axios.get(
                "http://localhost:3001/public/courses"
            );

            setCourses(response.data.data);
        }

        getCourses();

    }, []);

    const filteredCourses = courses.filter((course) => {

        const matchesSearch =
            course.title
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesLanguage =
            selectedLanguage === "" ||
            course.language?.code === selectedLanguage;

        const matchesCategory =
            selectedCategory === "" ||
            course.category?.title === selectedCategory;

        const matchesDifficulty =
            selectedDifficulty === "" ||
            course.difficulty?.title === selectedDifficulty;

        const matchesRating =
            selectedRating === 0 ||
            Number(course.rating) >= Number(selectedRating);

        return (
            matchesSearch &&
            matchesLanguage &&
            matchesCategory &&
            matchesDifficulty &&
            matchesRating
        );
    });

    return (
        <div className="min-h-screen ">

            <div className="w-full px-6 py-10 flex justify-center">

                <div
                    className="
                        w-full
                        max-w-[1450px]
                        flex
                        gap-6
                        items-start
                    "
                >

                    <CourseFilter
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}

                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}

                        selectedDifficulty={selectedDifficulty}
                        setSelectedDifficulty={setSelectedDifficulty}

                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                    />

                    <div className="flex-1 flex flex-col gap-4">

                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                        />

                        {filteredCourses.map((course) => (

                            <CourseCard
                                key={course.id}
                                course={course}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}