import { Link } from "react-router-dom";

type Results = {
  imgUrl: string;
  fullName: string;
  location?: string;
  desc: string;
};

const Results = ({ results }: { results: Results[] }) => {
  return (
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
  );
};

export default Results;
