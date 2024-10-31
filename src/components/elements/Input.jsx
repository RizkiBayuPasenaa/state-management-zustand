import PropTypes from 'prop-types'
function Input(props) {
  const { type, name, placeholder, value, onChange } = props;

  return (
    <input className='w-full p-2 border border-gray-300 rounded-md'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
