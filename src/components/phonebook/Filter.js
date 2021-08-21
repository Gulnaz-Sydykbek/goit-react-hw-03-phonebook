import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Filter(props) {
  const { value, onChangeFilter } = props;
  const { label, input } = s;

  return (
    <label className={label}>
      Filter contacts by name
      <input
        className={input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder=" "
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
