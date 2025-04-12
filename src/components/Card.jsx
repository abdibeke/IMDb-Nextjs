import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-400 bg-white dark:bg-gray-800 mx-2 my-3">
      <Link href={`/movie/${result.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            alt={result.title || result.name || "Movie poster"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {result.title || result.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm leading-relaxed">
            {result.overview}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{result.release_date || result.first_air_date}</span>
            <div className="flex items-center space-x-1">
              <FiThumbsUp className="h-4 w-4 text-amber-500" />
              <span>{result.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
