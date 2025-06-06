import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ href, children, className = '', isExternal = false, ...props }) {
  const baseStyle = `inline-flex items-center justify-center bg-orange-400 hover:bg-orange-500 light:bg-purple-500 light:hover:bg-purple-800 text-white px-6 py-3 my-5 rounded-full transition-colors duration-300 ${className}`;

  const MotionWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (isExternal) {
      return (
        <MotionWrapper>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyle}
            {...props}
          >
            {children}
          </a>
        </MotionWrapper>
      );
    } else {
      return (
        <MotionWrapper>
          <Link to={href} className={baseStyle} {...props}>
            {children}
          </Link>
        </MotionWrapper>
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
