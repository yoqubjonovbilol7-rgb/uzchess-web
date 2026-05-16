interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function Search({search, setSearch,}: SearchProps) {

    return (
        <div className="relative w-[280px]">
            <input type="text" placeholder="Izlash"
                   value={search} onChange={(e) => setSearch(e.target.value)}
                   className="w-full h-[52px] bg-[#0D0D0D] border border-[#23262F] rounded-xl pl-12 pr-4 text-sm
                   text-white placeholder:text-[#6F767E] outline-none focus:border-[#2EA6FF] transition" />

            <img
                src="/icon.jpg"
                alt="search"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
            />

        </div>
    );
}