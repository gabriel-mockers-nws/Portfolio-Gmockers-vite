import PropTypes from 'prop-types';

export default function TextArticle({
    title,
    children,
}) {
    return (
        <>
            <div className="mx-15 my-12">
                <h4 className="text-2xl font-semibold mb-5 font-Orbitron underline ">{title}</h4>
                <div className="text-base leading-relaxed mb-4 ml-3 mt-9 custom-list">{children}</div>
            </div>
        </>
    );
};

TextArticle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}; 