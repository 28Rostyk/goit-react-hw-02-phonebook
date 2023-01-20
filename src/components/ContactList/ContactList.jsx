// import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number} <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
