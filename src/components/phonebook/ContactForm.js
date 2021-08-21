import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onAddNewContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { label, input, form, button } = s;
    const buttonActive = name.length > 0 && number.length > 0;

    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={label}>
          Name
          <input
            className={input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
            placeholder=" "
          />
        </label>
        <label className={label}>
          Number
          <input
            className={input}
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
            placeholder=" "
          />
        </label>
        <button className={button} type="submit" disabled={!buttonActive}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
