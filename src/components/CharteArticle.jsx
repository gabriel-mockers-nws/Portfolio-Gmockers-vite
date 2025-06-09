import PropTypes from 'prop-types';

export default function CharteArticle({
    title,
    images = null,
    children,
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
                </div>
            </div>
        </>

    )
}

CharteArticle.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string, 
    children: PropTypes.node.isRequired,
};