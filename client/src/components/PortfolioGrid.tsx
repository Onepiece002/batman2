import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioImage } from "@shared/schema";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: images, isLoading } = useQuery<PortfolioImage[]>({
    queryKey: ["/api/portfolio/images"],
  });

  const filters = [
    { key: "all", label: "ALL" },
    { key: "portrait", label: "PORTRAITS" },
    { key: "urban", label: "URBAN" },
    { key: "landscape", label: "LANDSCAPE" },
    { key: "commercial", label: "COMMERCIAL" },
    { key: "wedding", label: "WEDDING" },
  ];

  const filteredImages = images?.filter(
    (image) => activeFilter === "all" || image.category === activeFilter
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-text-secondary">Loading portfolio...</div>
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary text-lg">No portfolio images available.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Filter Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`pb-2 px-1 font-medium text-sm md:text-base tracking-wider transition-all duration-300 ${
                activeFilter === filter.key
                  ? "border-b-2 border-text-primary text-text-primary"
                  : "text-text-secondary hover:text-text-primary border-b-2 border-transparent"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid - Masonry Layout */}
      <div className="grid-masonry">
        {filteredImages?.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid-item group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg bg-dark-card">
              <img
                src={image.imageUrl}
                alt={image.title || "Portfolio image"}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.title && (
                  <h3 className="text-text-primary font-semibold text-lg mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-text-secondary text-sm line-clamp-2">{image.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredImages?.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-secondary text-lg">
            No images found for the selected category.
          </p>
        </div>
      )}
    </div>
  );
}
