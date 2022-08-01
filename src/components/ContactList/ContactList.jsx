import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul >
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />

                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};
export default ContactList;