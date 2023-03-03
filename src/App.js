import { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.scss';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://62c0af81c134cf51ced2dc48.mockapi.io/posts')
    .then(({ data }) => {
      setPosts(data);
    });
  }, []);


  const addPostItem = (obj) => {
    axios.post('https://62c0af81c134cf51ced2dc48.mockapi.io/posts', obj)
    .then(({ data }) => {
      setPosts([...posts, data]);
    })
    .catch(e => {
      console.err(e);
    });
  };

  const removePostItem = (obj) => {
    axios.delete(`https://62c0af81c134cf51ced2dc48.mockapi.io/posts/${obj.id}`)
    .then(({ data }) => {
      const newPosts = posts.filter(post => post.id !== data.id);
      setPosts(newPosts);
    })
    .catch(e => {
      console.err(e);
    });
  };

  return (
    <div className="App">
      <PostForm create={addPostItem}/>
      <hr />
      {
        posts.length 
        ? 
        <PostList posts={posts} removePost={removePostItem}/>
        :
        <h1>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
