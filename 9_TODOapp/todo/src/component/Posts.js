import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = { 
        posts: []
     }

     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts : res.data.slice(10,20)
                })
            });
     } 

    render() { 
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{ post.title }</span>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return ( 
            <div className="container">
                <h1 className="purple-text center">Posts</h1>
                {postList}
            </div>
         );
    }
}
 
export default Posts;