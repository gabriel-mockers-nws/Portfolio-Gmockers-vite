import PropTypes from 'prop-types';
import Button from './Button';
import SwiperCarousel from './SwiperCarousel';

export default function Article({
  title,
  reverse = false,
  imageType = "image", // Par défaut on affiche une image
  images,
  buttons = [],
  children,
}) {
  const flexDirection = reverse ? 'row-reverse' : 'row';
  const isCarousel = imageType === "carousel" && Array.isArray(images); // On vérifie si imageType est "carousel" et si images est un tableau
  const isVideo = imageType === "video"; // Vérifie si c'est une vidéo YouTube
  
  // Assurez-vous que l'URL de la vidéo YouTube est bien formatée
  const videoUrl = isVideo ? `https://www.youtube.com/embed/${images}` : null; // images contient l'ID de la vidéo YouTube

  return (
    <div className={`flex flex-${flexDirection} items-center gap-8 my-10 mx-12`}>
      {/* Zone image, vidéo ou carousel */}
      <div className="w-[32%]">
        {isCarousel ? (
          <SwiperCarousel images={images} />
        ) : isVideo ? (
          // Intégration de l'iframe YouTube
          <iframe
            width="100%"
            height="auto"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[27vh] object-cover"
          />
        ) : (
          <img
            src={images}
            alt={title}
            className="h-[27vh] w-[60vh] object-cover"
          />
        )}
      </div>

      {/* Zone texte + boutons */}
      <div className="w-[55%]">
        <h4 className="text-xl font-semibold mb-8 font-inter">{title}</h4>
        <div className="text-base leading-relaxed mb-4">{children}</div>

        {buttons.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            {buttons.map((btn, i) => (
              <Button
                key={i}
                href={btn.href}
                isExternal={btn.isExternal}
                className={btn.className}
              >
                {btn.label}
                {btn.iconClass && <i className={`${btn.iconClass} ml-2`} />}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  imageType: PropTypes.oneOf(["image", "carousel", "video"]), // Ajout de "video" comme option
  images: PropTypes.oneOfType([
    PropTypes.string, // URL ou ID de la vidéo YouTube
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      iconClass: PropTypes.string,
      isExternal: PropTypes.bool,
      className: PropTypes.string,
    })
  ),
  children: PropTypes.node.isRequired,
};
