import React, { Component } from 'react';
import axios from 'axios';

class Post_detail extends Component {
    state = { 
        post:null
     }
     componentDidMount(){
         let id = this.props.match.params.post_id;   

         axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res);
                
            });
     }
    render() { 
        const post = this.state.post ? (
            <div className="card-content">
                <span className="card-title blue-text">{ this.state.post.title }</span>
                <p className="card-body">{ this.state.post.body }</p>
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
 
export default Post_detail;