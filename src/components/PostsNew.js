import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label htmlFor={field.input.name}>{field.label}</label>
                <input 
                    type="text"
                    className="form-control" 
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/">&lt; Go back to posts</Link>
                </div>
                <form>
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
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);