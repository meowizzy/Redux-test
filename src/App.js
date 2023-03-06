import { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SearchForm from './components/SearchForm';
import './App.scss';
import axios from 'axios';

function App() {
  const URI = 'https://62c0af81c134cf51ced2dc48.mockapi.io/posts';

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(URI)
    .then(({ data }) => {
      setPosts(data);
    });
  }, []);


  const addPostItem = (obj) => {
    axios.post(URI, obj)
    .then(({ data }) => {
      setPosts([...posts, data]);
    })
    .catch(e => {
      console.err(e);
    });
  };

  const removePostItem = (obj) => {
    axios.delete(`${URI}/${obj.id}`)
    .then(({ data }) => {
      const newPosts = posts.filter(post => post.id !== data.id);
      setPosts(newPosts);
    })
    .catch(e => {
      console.error(e);
    });
  };

  const searchQuery = query => {
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.desc.toLowerCase().includes(query));
    const newPosts = filteredPosts ? filteredPosts : [{...posts}];

    return query ? newPosts : posts;
  };
  
  const searchedPosts = searchQuery(query);

  return (
    <div className="App">
      <PostForm create={addPostItem}/>
      <SearchForm setSearchText={setQuery}/>
      <hr />
      {
        searchedPosts.length 
        ? 
        <PostList posts={searchedPosts} removePost={removePostItem}/>
        :
        <h1>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
