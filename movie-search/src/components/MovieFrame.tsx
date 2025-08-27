import type { MovieResult } from "../types";

interface MovieFrameProps {
  results: MovieResult[];
}

const MovieFrame = ({ results }: MovieFrameProps) => {
    console.log(results.length)
  
    return (
    <>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {
         results.map((result) => (
          <div
            key={result.imdbID}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              className="w-full h-80 object-cover"
              src={
                result.Poster !== "N/A"
                  ? result.Poster
                  : "https://via.placeholder.com/300x450?text=No+Poster"
              }
              alt={result.Title}
            />
            <div className="p-4 flex flex-col justify-between h-40">
              <h5 className="text-lg font-semibold text-gray-900 truncate">
                {result.Title}
              </h5>
              <p className="text-sm text-gray-600">Released: {result.Year}</p>
              <div className="mt-3">
                <a
                  href={`https://www.imdb.com/title/${result.imdbID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg hover:from-indigo-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieFrame;
