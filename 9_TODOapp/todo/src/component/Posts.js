import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Posts extends Component {
    render() { 
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id }>
                            <span className="card-title">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <p className="center">No posts yet</p>
        );
        return ( 
            <div className="container">
                <h1 className="purple-text center">Posts</h1>
                {postList}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
  }

export default connect(mapStateToProps)(Posts);