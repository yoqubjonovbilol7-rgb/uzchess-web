// SearchBar.tsx

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

export default function SearchBar({search, setSearch,}: Props) {

    return (
        <div className="
                w-full
                h-[70px]
                bg-[#232627]
                border border-[#1F2937]
                rounded-2xl
                px-6
                flex items-center gap-4
            "
        >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-gray-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.4 5.4a7.5 7.5 0 0 0 11.25 11.25Z"
                />
            </svg>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Izlash"
                className="
                    bg-transparent
                    flex-1
                    outline-none
                    text-white
                    text-xl
                    placeholder:text-gray-500
                "
            />

        </div>
    );
}