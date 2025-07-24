import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioImages, portfolioCategories } from "@/data/staticData";
import { X, Download, ZoomIn } from "lucide-react";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = portfolioCategories.map(cat => ({
    key: cat,
    label: cat.toUpperCase()
  }));

  const filteredImages = portfolioImages.filter(
    (image) => activeFilter === "all" || image.category === activeFilter
  );

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

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

      {/* Portfolio Grid - 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer relative"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg bg-dark-card aspect-square">
              <img
                src={image.imageUrl}
                alt={image.title || "Portfolio image"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.title && (
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-gray-300 text-sm line-clamp-2">{image.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(selectedImage.imageUrl, selectedImage.title || 'portfolio-image')}
                className="absolute top-4 right-16 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <Download className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title || "Portfolio image"}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                {selectedImage.title && (
                  <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p className="text-gray-300 text-lg">{selectedImage.description}</p>
                )}
                <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
