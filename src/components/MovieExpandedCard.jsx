import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import BackButton from "./BackButton";
import Button from "./Button";
import PostMessage from "./PostMessage";
import Rating from "./Rating";

export default function MovieExpandedCard({
    movie,
    isLoading,
    error,
    setIsMovieExpanded,
    watchedList,
    setWatchedList,
}) {
    const [rating, setRating] = useState(0);
    const handleAddMovie = () => {
        const watchedMovie = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            userRating: rating,
        };

        const updatedWatchedList = [...watchedList, watchedMovie];
        setWatchedList(updatedWatchedList);
    };
    return (
        <div className="mov-view">
            {isLoading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : (
                <>
                    <div className="mov-view-header">
                        <BackButton
                            onClick={() => setIsMovieExpanded(false)}
                            label={"Results"}
                        />
                    </div>
                    <div className="mov-view-item">
                        <div className="mov-view-item-img">
                            <img src={movie.Poster} alt={movie.Title} />
                            <div className="poster-overlay"></div>
                        </div>
                        <h2>{movie.Title}</h2>
                        <div className="mov-view-item-details">
                            <span>
                                {movie.Year[movie.Year.length - 1] === "–" ? (
                                    <span>Since {movie.Year.slice(0, -1)}</span>
                                ) : (
                                    <span>{movie.Year}</span>
                                )}
                            </span>{" "}
                            |{" "}
                            <span>
                                {movie.Rated === "N/A"
                                    ? "Not Rated"
                                    : movie.Rated}
                            </span>{" "}
                            | <span>{movie.Genre}</span>
                            {movie.imdbRating === "N/A" ? (
                                <></>
                            ) : (
                                <span>| </span>
                            )}
                            {movie.imdbRating === "N/A" ? null : (
                                <span style={{ display: "flex" }}>
                                    <img
                                        className="imdb"
                                        src="src/assets/img/IMDb_logo.png"
                                        alt="IMDB logo"
                                    />
                                    <span style={{marginTop:"5px"}}>{movie.imdbRating}</span>
                                </span>
                            )}
                            {/* {movie.imdbRating === "N/A" ? null : (
                                <span
                                    style={{
                                        alignContent: "center",
                                        marginRight: "20px",
                                    }}
                                >
                                    {movie.imdbRating}
                                </span>
                            )} */}
                            {movie.Type === "series" ? (
                                <span>
                                    {movie.totalSeasons === "N/A" ? (
                                        <></>
                                    ) : movie.totalSeasons === "1" ? (
                                        <>
                                            {"|"} {movie.totalSeasons} Season
                                        </>
                                    ) : (
                                        <>
                                            {"|"} {movie.totalSeasons} Seasons
                                        </>
                                    )}{" "}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <p className="mov-view-item-plot">
                            {movie.Plot}
                            <br></br>
                            <br></br>
                            Starring {movie.Actors}. <br></br>
                            <br></br>
                            {movie.Director === "N/A" ? (
                                <>
                                    {movie.Language === "N/A" ? (
                                        <></>
                                    ) : (
                                        <span>
                                            Original Language:{" "}
                                            {movie.Language.split(",")[0]}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span>
                                    Directed by {movie.Director}.<br></br>
                                    {movie.Language === "N/A" ? (
                                        <></>
                                    ) : (
                                        <span>
                                            <br></br>
                                            Original Language:{" "}
                                            {movie.Language.split(",")[0]}
                                        </span>
                                    )}
                                </span>
                            )}
                        </p>

                        {watchedList.some(
                            (watchedMovie) =>
                                watchedMovie.imdbID === movie.imdbID,
                        ) ? (
                            <PostMessage message={"Already in your list!"} />
                        ) : (
                            <>
                                <div className="mov-view-item-rating">
                                    <Rating
                                        rating={rating}
                                        setRating={setRating}
                                    />
                                </div>
                                <div className="btn-container">
                                    <Button
                                        onClick={handleAddMovie}
                                        label="Add to list"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
