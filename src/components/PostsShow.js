import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        const { title, categories, content } = this.props.post;
        return (
            <div>
                <Link to="/">&lt; Go back to posts</Link>
                <button className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
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
}, { fetchPost, deletePost })(PostsShow);