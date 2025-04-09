export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6">
        About{" "}
        <span className="text-gray-800 dark:text-gray-200">
          Our Movie Database
        </span>
      </h1>

      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md dark:shadow-gray-900/50 p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Welcome to our{" "}
          <span className="font-semibold text-amber-600 dark:text-amber-400">
            movie database website
          </span>
          ! Here, you can explore a vast collection of movies, TV shows, and
          actors. Our platform is designed to provide you with comprehensive
          information about your favorite films and television series, including
          cast and crew details, plot summaries, ratings, and much more.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our website is designed to provide you with a{" "}
          <span className="font-semibold dark:text-gray-100">
            comprehensive and user-friendly experience
          </span>
          . Whether you are a movie buff or just looking for something to watch,
          we have got you covered. Explore our extensive database, discover new
          favorites, and stay up-to-date with the latest in the world of
          entertainment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-amber-50/50 dark:bg-gray-700 p-5 rounded-lg border border-amber-100 dark:border-gray-600 transition-colors duration-300">
          <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver the most accurate and up-to-date movie information with
            an intuitive interface that makes discovery effortless.
          </p>
        </div>
        <div className="bg-blue-50/50 dark:bg-gray-700 p-5 rounded-lg border border-blue-100 dark:border-gray-600 transition-colors duration-300">
          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Features
          </h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 marker:text-amber-500 dark:marker:text-amber-400">
            <li>Comprehensive movie details</li>
            <li>User ratings and reviews</li>
            <li>Personalized recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
