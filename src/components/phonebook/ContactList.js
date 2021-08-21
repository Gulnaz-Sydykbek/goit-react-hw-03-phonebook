import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function ContactList(props) {
  const { contacts, onDeleteContact } = props;
  const { item } = s;

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
