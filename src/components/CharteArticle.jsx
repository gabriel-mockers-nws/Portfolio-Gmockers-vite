import PropTypes from 'prop-types';
import ColorBox from './ColorBox';

export default function CharteArticle({
    title,
    images = null,
    children,
    colors = null,
}) {
    return (
        <>
    
            <div className="items-center gap-15 my-25 mx-4 flex flex-col md:flex-row justify-center">
                <div className='items-center justify-center flex flex-col'>
                {images && (
                <img
                    src={images}
                    alt={title}
                    className="h-full w-auto rounded-lg shadow-lg"
                />
                )}
                </div>

                <div className='w-full md:w-[65%] text-center md:text-left ml-25'>
                    <h4 className="text-2xl font-semibold mb-5 font-Orbitron underline ">{title}</h4>
                    <div className="text-base leading-relaxed mb-4 custom-list">{children}</div>

                    {colors && colors.length > 0 && (
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4 mt-8 ">
                        {colors.map((color, index) => (
                            <ColorBox
                                key={index}
                                hex={color.hex}
                                gradient={color.gradient || false}
                            />
                        ))}
                    </div>
                )}
                </div>
            </div>
        </>

    )
}

CharteArticle.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string, 
    children: PropTypes.node.isRequired,
        colors: PropTypes.arrayOf(
        PropTypes.shape({
            hex: PropTypes.string.isRequired,
            gradient: PropTypes.bool,
        })
    ),
};