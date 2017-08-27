import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { contestSubmit } from '../actions';

class ContestForm extends Component {
  formSubmit(value) {
    const { reset } = this.props;
    reset();
    this.props.contestSubmit(value);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <input
          type="text"
          className="form-control form-control-danger"
          placeholder={field.placeholder}
          style={{ maxWidth: field.maxWidth + 'px' }}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="contestForm row text-center">
        <h4 className="col-12 text-white">ENTER TO WIN</h4>
        <p className="col-12 text-white text">
          Enter to win the 'Aloha Awaits You'
        </p>
        <div className="col-12">
          <form className="form-inline justify-content-center">
            <Field
              name="name"
              placeholder="Enter Name"
              maxWidth="200"
              component={this.renderField}
            />
            <div className="betweenInputs" />
            <Field
              name="email"
              placeholder="Enter Email"
              maxWidth="150"
              component={this.renderField}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary submitBtn"
                type="submit"
                onClick={handleSubmit(value => this.formSubmit(value))}
              >
                SUBMIT
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!values.name) {
    errors.name = 'Please enter a name';
  }
  if (!values.email || regex.test(values.email) === false) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
}

ContestForm = reduxForm({
  form: 'contestForm',
  validate
})(ContestForm);

export default connect(null, { contestSubmit })(ContestForm);
