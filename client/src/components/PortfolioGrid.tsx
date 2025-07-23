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
    { key: "portraits", label: "PORTRAITS" },
    { key: "lifestyle", label: "LIFESTYLE" },
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
        <div className="flex space-x-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`pb-2 font-medium transition-colors ${
                activeFilter === filter.key
                  ? "border-b-2 border-white text-white"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid - Masonry Layout */}
      <div className="grid-masonry">
        {filteredImages?.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid-item group cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={image.imageUrl}
                alt={image.title || "Portfolio image"}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {image.title && (
              <div className="mt-3">
                <h3 className="text-white font-medium">{image.title}</h3>
                {image.description && (
                  <p className="text-text-secondary text-sm mt-1">{image.description}</p>
                )}
              </div>
            )}
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
