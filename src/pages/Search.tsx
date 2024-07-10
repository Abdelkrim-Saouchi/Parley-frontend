import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import f2 from "../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import f3 from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import f4 from "../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";
import f5 from "../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import f6 from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import PaginationBar from "../components/PaginationBar";
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
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">
        Explore Parley, search People and Groups
      </h2>
      <SearchBar />
      <h3 className="mb-8 mt-8 text-xl font-bold md:text-lg">Results</h3>

      <Results results={results} />

      {results.length > 0 && <PaginationBar />}
    </main>
  );
};

export default Search;
