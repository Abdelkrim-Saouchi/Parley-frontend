const SearchBar = () => {
  return (
    <div className="flex items-center gap-6 md:w-5/6">
      <div className="flex grow items-center gap-3 rounded-3xl bg-accent px-3 text-background shadow-lg has-[:focus]:outline has-[:focus]:outline-secondary">
        <span className="icon-[material-symbols--search] size-10"></span>
        <input
          type="search"
          placeholder="Type search"
          className="h-full w-full bg-transparent p-3 outline-none placeholder:font-bold placeholder:text-background"
        />
      </div>
      <button>
        <span className="icon-[material-symbols--person] size-10"></span>
      </button>
      <button>
        <span className="icon-[lets-icons--group-fill] size-10"></span>
      </button>
    </div>
  );
};

export default SearchBar;
