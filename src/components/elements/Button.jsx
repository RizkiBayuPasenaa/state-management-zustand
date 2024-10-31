import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, children, type } = props;
  
  return (
    <button 
      className={`border-2 rounded-md border-solid p-1 text-base font-semibold ${
        children === 'Edit' 
          ? 'bg-green-500 text-white' 
          : children === 'Delete'  
          ? 'bg-red-500 text-white' 
          : children === 'Add'
          ? 'bg-blue-500 text-white'
          : children === 'Save'
          ? 'bg-green-500 text-white'
          : children === 'Cancel'
          ? 'bg-red-500 text-white'
          : 'bg-blue-500 text-white'
      }`}
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;
