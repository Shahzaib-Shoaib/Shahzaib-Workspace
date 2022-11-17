import React from "react";

const sizeClasses = {
  height: "h-32",
  width: "w-32",
};

export default function MovieCard({ Movie }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`} src={Movie.imageUrl} alt={Movie.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{Movie.name}</h3>

        <p className="text-gray-600">${Movie.averagePrice} / show average</p>
        <div className="mt-4">
          <a href="#" className="text-brand-dark hover:text-brand font-semibold text-sm">
           Buy Now !
          </a>
        </div>
      </div>
    </div>
  );
}
