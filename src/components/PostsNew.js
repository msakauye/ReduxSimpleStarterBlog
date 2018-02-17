import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostsNew extends Component {
    render() {
        return (
            <div>
                <Link to="/">&lt; Go back to posts</Link>
            </div>
        );
    }
}

export default PostsNew;