import React, { Component } from 'react';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lucas Montano",
          avatar: "https://avatars2.githubusercontent.com/u/7559318?s=400&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tortor nisi. Ut nibh quam, feugiat vitae ipsum quis,elementum aliquam justo.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui non velit consectetur laoreet ut ac libero.Pellentesque in consectetur velit. Suspendisse"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Robson Marques",
          avatar: "https://avatars3.githubusercontent.com/u/861751?s=400&v=4"
        },
        date: "02 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tortor nisi. Ut nibh quam, feugiat vitae ipsum quis,elementum aliquam justo.",
        comments: [
          {
            id: 1,
            author: {
              name: "Lucas Montano",
              avatar: "https://avatars2.githubusercontent.com/u/7559318?s=400&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui non velit consectetur laoreet ut ac libero.Pellentesque in consectetur velit. Suspendisse"
          },
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui non velit consectetur laoreet ut ac libero.Pellentesque in consectetur velit. Suspendisse"
          }
        ]
      }
    ]
  };

  render() {
    return (this.state.posts.map(post => <Post key={post.id} data={post} />));
  }

}

export default PostList;
