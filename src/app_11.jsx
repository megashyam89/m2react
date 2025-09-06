import React, { useState } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const movies = [
    { id: 1, title: "Bahubali" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "OG" },
    { id: 4, title: "Final destination" },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie List</h1>
      <ul className="space-y-3">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={`p-3 rounded-lg border flex justify-between items-center ${
              favorites.includes(movie.id)
                ? "bg-yellow-200 border-yellow-400"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <span>{movie.title}</span>
            <button
              onClick={() => toggleFavorite(movie.id)}
              className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              {favorites.includes(movie.id) ? "Unfavorite" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">⭐Favorites</h2>
        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet</p>
        ) : (
          <ul className="list-disc pl-6">
            {movies
              .filter((movie) => favorites.includes(movie.id))
              .map((fav) => (
                <li key={fav.id}>{fav.title}</li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
