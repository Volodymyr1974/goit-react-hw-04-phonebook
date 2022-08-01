import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <div className={style.item}>
            {`${name} :  ${number}`}
            <button className={style.item_button}
                onClick={onDeleteContact}
                type="button"
            >
                Delete
            </button>
        </div>


    )
};
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;