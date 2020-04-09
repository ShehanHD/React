import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/actionsPosts';

class Post_detail extends Component {
    
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.goBack();
    }

    render() { 
        const post = this.props.post ? (
            <div className="card-content">
                <span className="card-title blue-text">{ this.props.post.title }</span>
                <p className="card-body">{ this.props.post.body }</p>
                <div className="center">
                    <button className="btn red" onClick={ this.handleClick }>Delete</button>
                </div>
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

const mapDispatchToProps = (dispach) => {
    return{
        deletePost: (id) => { dispach(deletePost(id)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Post_detail);