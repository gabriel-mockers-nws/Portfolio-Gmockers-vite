import PropTypes from 'prop-types';
import Button from './Button';
import SwiperCarousel from './SwiperCarousel';

export default function Article({
  title,
  reverse = false,
  imageType = 'image',
  images,
  buttons = [],
  children,
}) {
  const isCarousel = imageType === "carousel" && Array.isArray(images);
  const isVideo = imageType === "video"; 
  
  const videoUrl = isVideo ? `https://www.youtube.com/embed/${images}` : null; // ternaire

  return (
    <>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-15 my-10 mx-4 md:mx-35`}> {/* Condition ternaire */} 
        <div className="w-full md:w-[40%] flex justify-center my-20 overflow-visible">

          {isCarousel ? (
            <SwiperCarousel images={images} />
          ) : isVideo ? (
            <iframe
              width="100%"
              height="auto"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[27vh] object-cover rounded-lg shadow-lg "
            />
          ) : (
            <img
              src={images}
              alt={title}
              className="h-[27vh] w-[60vh] object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

        <div className="w-full md:w-[65%] text-center md:text-left">
          <h4 className="text-xl font-semibold mb-8 font-inter">{title}</h4>
          <div className="text-base leading-relaxed mb-4">{children}</div>

          {buttons.length > 0 && (
            <div className="flex gap-4 flex-wrap md:justify-start justify-center">
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
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  imageType: PropTypes.oneOf(["image", "carousel", "video"]), 
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
