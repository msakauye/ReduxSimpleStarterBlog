import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            // {id: 202496, title: "sup", categories: "Content", content: "my content"}
            return (
                <li key={post.id} className="list-group-item">{post.title}</li>
            );
        });
    }

    render() {
        if (!this.props.posts) {
            return (
                <div>Loading...</div>
            );
        }
        if (this.props.length == 0) {
            return (
                <div>No posts :(</div>
            );
        }
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect(({ posts }) => {
    return { posts }; 
}, { fetchPosts })(PostsIndex);