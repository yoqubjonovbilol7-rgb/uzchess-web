import { useState } from "react";

interface Props {
    page: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

function PaginationItem({ page, currentPage, setCurrentPage }: Props) {
    const isActive = currentPage === page;

    return (<button onClick={() => setCurrentPage(page)}
                    className={`min-w-7 px-2 h-7 rounded-sm transition 
                    ${isActive ? "bg-[#26FF8E] text-black" : "text-white hover:bg-[#26FF8E] hover:text-black"}`}>
        {page}</button>);
}

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;

    const goPrev = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const goNext = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    return (
        <div className="flex gap-2 items-center">

            <button onClick={goPrev} className="px-2 h-7 rounded-sm text-white hover:bg-[#26FF8E] hover:text-black transition">{"<"}</button>

            <PaginationItem page={1} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={3} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={5} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={6} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={7} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={8} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={9} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={11} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={12} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={13} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={14} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={16} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={17} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={18} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={19} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PaginationItem page={20} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <button onClick={goNext} className="px-2 h-7 rounded-sm text-white hover:bg-[#26FF8E] hover:text-black transition">{">"}</button>

        </div>
    );
}