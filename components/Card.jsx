import PropTypes from 'prop-types';

export function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;