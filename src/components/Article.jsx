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

  return (
    <div className={`flex flex-${flexDirection} items-center gap-6 my-8`}>
      {/* Zone image ou carousel */}
      <div className="w-[32%]">
        {isCarousel ? (
          <SwiperCarousel images={images} />
        ) : (
          <img
            src={images}
            alt={title}
            className="h-[27vh] w-[60vh] object-cover"
          />
        )}
      </div>

      {/* Zone texte + boutons */}
      <div className="w-[60%]">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
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
  imageType: PropTypes.oneOf(["image", "carousel"]), // Ajout de l'imageType pour gérer le type d'affichage de l'image
  images: PropTypes.oneOfType([
    PropTypes.string,
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
