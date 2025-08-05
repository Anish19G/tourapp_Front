import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Import your images
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

// Define breakpoints for responsive images
const breakpoints = [240, 320, 480, 640, 800, 1024, 1200, 1440, 1600, 1920];

// Helper function to generate image URLs with different sizes
const generateImageVariations = (baseSrc, width, height) => {
  const extension = baseSrc.split('.').pop() || 'jpg';
  
  return {
    src: baseSrc,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: `${baseSrc}?width=${breakpoint}`, // Adjust this based on your actual image URL pattern
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  };
};

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  // Your images array with responsive variants
  const images = [
    {
      src: GalleryImg1,
      width: 800,
      height: 600,
      alt: "A beautiful landscape with mountains and a lake",
      title: "Mountain Lake",
      description: "Photographer: John Doe"
    },
    {
      src: GalleryImg3,
      width: 800,
      height: 600,
      alt: "A vibrant sunset over a calm body of water with boats",
      title: "Sunset Harbor",
      description: "Photographer: Jane Smith"
    },
    {
      src: GalleryImg6,
      width: 800,
      height: 600,
      alt: "People kayaking in clear blue water.",
      title: "Placeholder Image 3"
    },
    {
      src: GalleryImg4,
      width: 800,
      height: 600,
      alt: "A person in a canoe on a serene lake.",
      title: "Placeholder Image 4"
    },
    {
      src: GalleryImg7,
      width: 800,
      height: 600,
      alt: "A snowy mountain landscape with fog.",
      title: "Placeholder Image 5"
    },
    {
      src: GalleryImg6,
      width: 800,
      height: 600,
      alt: "A snowy mountain landscape with fog.",
      title: "Placeholder Image 6"
    },
    
  ].map(img => ({
    ...img,
    ...generateImageVariations(img.src, img.width, img.height)
  }));

  return (
    <div style={{ 
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px"
    }}>
      <RowsPhotoAlbum
        photos={images}
        targetRowHeight={300}
        spacing={12}
        padding={8}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ 
            ...wrapperStyle,
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            ":hover": { transform: "scale(1.02)" }
          }}>
            {renderDefaultPhoto({ wrapped: true })}
            {(photo.title || photo.description) && (
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                color: "white"
              }}>
                {photo.title && <div style={{ fontWeight: 500 }}>{photo.title}</div>}
                {photo.description && <div style={{ fontSize: "12px" }}>{photo.description}</div>}
              </div>
            )}
          </div>
        )}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
          caption: { 
            paddingBottom: "24px",
            textAlign: "center" 
          }
        }}
      />
    </div>
  );
}