import React from "react";

import popularMovie from "./data/popularMovie";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-50 w-100" src="/img/logo-idk.jpg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/venom-2-cvr.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can book tickets from anywhere.
              <br className="hidden lg:inline" /> <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Megaplex Cinemas helps you find tickets by your choice so you can easily get your favourite seat by just one click.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="../Seat-Selector/index.html"
              >
                Book your tickets
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/venom-2-cvr.jpg"
            alt="Venom 2"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular Movie</h2>
        <p className="mt-2 text-gray-600">A selection of great movies to watch.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularMovie.map((Movie) => (
            <MovieCard Movie={Movie} key={Movie.name} />
          ))}
        </div>
      </div>
    </div>
    
  );
}
