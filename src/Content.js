import React from 'react'

class Content extends React.Component {
    constructor() {
        super()
        this.state ={
            isLoading: true,
            posts: []
        }

    }


    componentDidMount(){
        this.setState({isLoading:true})
        fetch('http://localhost/blog/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => this.setState({isLoading:false, posts: data}))
    }

    render() {

        let info, post
        if (this.state.isLoading === true) {
            info = "Loading"
            post = ""
        } else {
            info = this.state.posts[0].title.rendered
            post = this.state.posts[0].content.rendered
            const regex = /(<([^>]+)>)/ig;
            post = post.replace(regex, '');
        }

        return (
            <section>
                <h1>{info}</h1>
                <p>{post}</p>
            </section>
        )

        
    }
}

export default Content