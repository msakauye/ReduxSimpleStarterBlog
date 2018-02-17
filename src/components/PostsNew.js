import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error }, input, label } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label htmlFor={input.name}>{label}</label>
                <input 
                    type="text"
                    className="form-control" 
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <div>
                    <Link to="/">&lt; Go back to posts</Link>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        label="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="categories"
                        label="Categories"
                        component={this.renderField}
                    />
                    <Field
                        name="content"
                        label="Content"
                        component={this.renderField}
                    />
                    <button className="btn btn-primary" type="Submit">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    } else if (values.title.length < 3) {
        errors.title = 'Enter a title that is at least 3 characters';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);