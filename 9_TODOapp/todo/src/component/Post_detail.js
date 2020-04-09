import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post_detail extends Component {
    render() { 
        const post = this.props.post ? (
            <div className="card-content">
                <span className="card-title blue-text">{ this.props.post.title }</span>
                <p className="card-body">{ this.props.post.body }</p>
            </div>
        ) : (
            <p className="center">loading......</p>
        );
        return ( 
            <div className="card">
                {post}
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.post_id);
    
    return{
        post: state.posts.find(p => p.id === id)
    }    
}
 
export default connect(mapStateToProps)(Post_detail);