import PropTypes from 'prop-types';
function ColorBox({ hex, gradient = false }) {
    return (
        <>
            <div className={`w-40 h-40 rounded-lg shadow-md flex md:flex-wrap items-center justify-center text-sm font-inter ${gradient ? 'text-white' : ''}`}
                style={{
                    background: gradient ? `linear-gradient(to right, ${hex})` : hex,
                }}
            >
                <span className="bg-white/50 px-1 py-0.5 rounded text-xs font-semibold backdrop-blur-sm text-black">
                    {gradient ? hex.replace(',', ' → ') : hex}
                </span>
            </div>  
        </>
    );
}
export default ColorBox;
ColorBox.propTypes = {
    hex: PropTypes.string.isRequired,
    gradient: PropTypes.bool,
};