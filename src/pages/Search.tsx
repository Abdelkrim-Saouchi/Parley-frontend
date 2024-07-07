import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import f2 from "../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import f3 from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import f4 from "../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";
import f5 from "../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import f6 from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import { Link } from "react-router-dom";
const Search = () => {
  const results = [
    {
      imgUrl: f1,
      fullName: "Saouchi Abdelkrim",
      location: "Algeria",
      desc: "Person",
    },
    {
      imgUrl: f2,
      fullName: "Emanuel Macron",
      location: "France",
      desc: "Person",
    },
    {
      imgUrl: f3,
      fullName: "The js Geek",
      desc: "Group",
    },
    {
      imgUrl: f4,
      fullName: "Donald Trump",
      location: "USA",
      desc: "Person",
    },
    {
      imgUrl: f5,
      fullName: "Free Palestine",
      desc: "Group",
    },
    {
      imgUrl: f6,
      fullName: "Criminal Netenyahou",
      location: "Israel",
      desc: "Person",
    },
  ];

  return (
    <main className="text-inter min-h-dvh bg-background px-5 py-2 text-lg text-primary md:ml-[128px] md:pl-24 md:pr-16">
      <h2 className="mb-8 text-3xl font-bold md:text-2xl">
        Explore Parley, search People and Groups
      </h2>
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
      <h3 className="mb-8 mt-8 text-xl font-bold md:text-lg">Results</h3>

      <div className="grid grid-cols-3 grid-rows-2 gap-8 gap-x-16 max-[1330px]:grid-cols-2 max-[980px]:grid-cols-1 md:w-5/6">
        {results.length === 0 && (
          <div>
            <p className="text-secondary/85">No results found</p>
            <span className="icon-[ic--twotone-search-off] size-24 text-secondary/85"></span>
          </div>
        )}

        {results.length > 0 &&
          results.map((result, index) => {
            if (result.desc === "Group") {
              return (
                <Link
                  to="#"
                  key={index}
                  className="flex items-center gap-4 border border-secondary p-3 hover:bg-accent hover:text-background"
                >
                  <img src={result.imgUrl} className="size-24 rounded-full" />
                  <div className="space-y-4">
                    <h4 className="font-bold">{result.fullName}</h4>
                    <p className="text-secondary/85">{result.desc}</p>
                  </div>
                </Link>
              );
            }
            return (
              <Link
                to="#"
                key={index}
                className="flex items-center gap-4 border border-secondary p-3 hover:bg-accent hover:text-background"
              >
                <img src={result.imgUrl} className="size-24 rounded-full" />
                <div className="space-y-4">
                  <h4 className="font-bold">{result.fullName}</h4>
                  <p className="text-secondary/85">{result.location}</p>
                </div>
              </Link>
            );
          })}
      </div>

      <div className="mt-8 space-x-4 font-bold text-secondary">
        <button>
          <span className="icon-[ep--arrow-left-bold]"></span>
        </button>

        <button className="rounded-full bg-secondary px-2 text-background">
          1
        </button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>

        <button>
          <span className="icon-[ep--arrow-right-bold]"></span>
        </button>
      </div>
    </main>
  );
};

export default Search;
