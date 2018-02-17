import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const FIELDS = {
    title: {
        label: 'Title',
        type: 'input'
    },
    categories: {
        label: 'Categories',
        type: 'input'
    },
    content: {
        label: 'Content',
        type: 'textarea'
    }
};

class PostsNew extends Component {
    renderFieldComponent(field) {
        const { meta: { touched, error }, input, label } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label htmlFor={input.name}>{label}</label>
                <field.type 
                    className="form-control" 
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderField({label, type}, name) {
        return (
            <Field
                key={name}
                name={name}
                label={label}
                type={type}
                component={this.renderFieldComponent}
            />
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        const fields = _.map(FIELDS, (config, field) => {
            return this.renderField
        });

        return (
            <div>
                <div>
                    <Link to="/">&lt; Go back to posts</Link>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {_.map(FIELDS, (config, field) => this.renderField(config, field))}
                    <button className="btn btn-primary" type="Submit">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (config, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });

    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);