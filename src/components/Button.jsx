import PropTypes from 'prop-types';

export default function MyButton({ href, children, className = '', ...props }) {
    const baseStyle = `inline-flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 my-5 rounded-full transition-colors duration-300 ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseStyle}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={baseStyle} {...props}>
            {children}
        </button>
    );
}

MyButton.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
