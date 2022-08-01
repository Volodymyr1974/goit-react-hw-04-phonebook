import React, { Component } from "react";
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    onFormChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        })
    };
    render() {
        const { name, number } = this.state;
        return (
            <div className={style.form_box}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p className={style.form_label}> Name</p>

                        <input className={style.form_input}
                            value={name}
                            onChange={this.onFormChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>

                    <label>
                        <p className={style.form_label}>Number</p>
                        <input className={style.form_input}
                            value={number}
                            onChange={this.onFormChange}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>

                    <button
                        type="submit" className={style.form_button}> Add contact</button>
                </form></div>

        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default ContactForm;