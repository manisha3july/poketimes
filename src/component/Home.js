import React , {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import pokeball from '../pokeball.png'




class Home extends Component{
    state = {
        posts:[]
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => {
           console.log(res)
           this.setState({
               posts: res.data.slice(0,10)
           })
       })
    }
    render(){
        const {posts} = this.state;
        const postlist = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                      <img src={pokeball}  alt="A pokeball"/>
                      <div className="card-content">
                      <Link to={'/' + post.id}>
                            <h4 className="card-title red-text text-left">{post.title}</h4>
                      </Link>
                            <p>{post.body}</p>
                      </div>
                    </div>
                )
            })
        ):(
            <div className="center">
             not posts Yet
            </div>
        )
        return(
            <div className='container home'>
             <h4 className='center'>Home</h4>
             {postlist}
            </div>
        )
    }
    
}

export default Home;