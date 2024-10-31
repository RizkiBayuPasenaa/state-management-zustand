import PropTypes from 'prop-types';
import Button from '../elements/Button';

function Card({ image, title, description, price, onEdit, onDelete }) {
  return (
    <div className="w-max border-2 border-green-500 rounded-lg p-4 hover:scale-110 hover:transition-transform flex flex-col gap-4">
      {image ? <div className="card-header">
        <img src={image} alt="" />
      </div> : null} 
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
      {onEdit && onDelete ? <div className="card-footer">
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </div> : null}
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Card;
