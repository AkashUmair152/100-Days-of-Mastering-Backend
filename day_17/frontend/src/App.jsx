import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
      } catch (err) {
        console.error("Error fetching jokes:", err);
        setError("Failed to load jokes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  // Apply dark class to html element (in case Tailwind needs it)
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-100">Loading jokes...</h2>
          <p className="text-gray-400 mt-2">Just a moment!</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="bg-gray-800 rounded-xl shadow-xl p-8 max-w-md text-center border border-red-900/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-100 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            😄 Jokes Hub
          </h1>
          <p className="mt-2 text-gray-300 max-w-lg mx-auto leading-relaxed">
            A collection of funny, clever, and sometimes questionable jokes — just for you.
          </p>
          <div className="mt-4 inline-block bg-gray-800 shadow-md rounded-full px-5 py-2 text-sm font-medium text-blue-300 border border-gray-700">
            {jokes.length} {jokes.length === 1 ? "Joke" : "Jokes"} Loaded
          </div>
        </header>

        {/* Jokes List */}
        {jokes.length === 0 ? (
          <div className="text-center py-16 bg-gray-800 rounded-xl shadow border border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M12 8v4l2 2m-6-6a9 9 0 1112.728 0l-12.728 12.728A9 9 0 016 12H4a10 10 0 1017.414 6.586"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-200">No jokes available</h3>
            <p className="text-gray-400 mt-2">Check back later!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {jokes.map((joke) => (
              <article
                key={joke.id}
                className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
                    {joke.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {joke.content}
                  </p>
                </div>
                <div className="bg-gray-700/50 px-6 py-3 border-t border-gray-700">
                  <span className="text-sm font-medium text-blue-400">#{joke.id}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Made with <span className="text-red-500">❤️</span> and laughter</p>
        </footer>
      </div>
    </div>
  );
};

export default App; 