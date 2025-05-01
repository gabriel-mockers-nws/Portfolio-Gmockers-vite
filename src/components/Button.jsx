import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ href, children, className = '', isExternal = false, ...props }) {
    const baseStyle = `inline-flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 my-5 rounded-full transition-colors duration-300 ${className}`;

    if (href) {
        if (isExternal) {
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
        } else {
            return (
                <Link to={href} className={baseStyle} {...props}>
                    {children}
                </Link>
            );
        }
    }

    return (
        <button className={baseStyle} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isExternal: PropTypes.bool,
};
