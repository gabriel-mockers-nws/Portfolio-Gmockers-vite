import PropTypes from 'prop-types';

export default function LogoVariant({
    title,
    variants = []
}) {
    return (
        <>
            <div className="items-center gap-15 my-25 mx-4 flex flex-col md:flex-row justify-center">
                <div className='w-full md:w-[65%] text-center md:text-left ml-25'>
                    <h4 className="text-2xl font-semibold mb-5 font-Orbitron underline ">{title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        {variants.map((variant, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={variant.src}
                                    alt={variant.caption}
                                    className="w-full max-w-[200px] rounded-lg shadow-md"
                                />
                                <span className="mt-2 text-sm font-medium">
                                    {variant.caption}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

LogoVariant.propTypes = {
    title: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired
        })
    ).isRequired
};
