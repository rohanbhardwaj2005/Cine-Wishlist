import { ChevronRightIcon } from "@primer/octicons-react";

export default function SearchMovieCard({ movie }) {
    return (
        <div className="flex justify-between align-center gap-16">
            <div className="flex align-center gap-12">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="flex flex-col gap-2">
                    <h2>{movie.Title}</h2>
                    <p>
                        <span>
                            {movie.Year[movie.Year.length - 1] === "–" ? (
                                <span>Since {movie.Year.slice(0, -1)}</span>
                            ) : (
                                <span>{movie.Year}</span>
                            )}
                        </span>{" "}
                        • <span>{movie.Type}</span>
                    </p>
                </div>
            </div>
            <ChevronRightIcon size={20} fill="#8b949e" />
        </div>
    );
}
