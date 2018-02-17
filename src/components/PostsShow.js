import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        const { title, categories, content } = this.props.post;
        return (
            <div>
                <Link to="/">&lt; Go back to posts</Link>
                <h3>{title}</h3>
                <h6>Categories: {categories}</h6>
                <p>{content}</p>
            </div>
        );
    }
}

export default connect(({ posts }, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        post: posts[id]
    };
}, { fetchPost })(PostsShow);