import { useEffect, useState } from 'react'
import axios from 'axios';

const APIDataHandling = () => {
  const [posts, setPosts] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    const fetchAPIData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const limitedPostData = response.data.slice(0,15);
            setPosts(limitedPostData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchAPIData();
  }, []);

  const handleTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  }

  const handleAddTitle = (e) => {
    e.preventDefault();
    if(titleInput.trim() === ''){
        alert('Title can not be empty!')
        return;
    }

    const newPost = {
        id: posts.length + 1,
        title: titleInput
    };
    setPosts([...posts, newPost]);
    setTitleInput('');
  };

  const handleDeleteTitle = (pId) => {
    const deletedPosts = posts.filter((post) => post.id !== pId);
    setPosts(deletedPosts);
  }

  const handleEditTitle = (postId, currentTitle) => {
    setEditId(postId);
    setEditTitle(currentTitle);
  }

  const handleUpdateTitle = (postId) => {
    const updatedPosts = posts.map((post) => post.id === postId ? {
        ...post,
        title: editTitle
    } : post);
    setPosts(updatedPosts);
    setEditId(null);
    setEditTitle('');
  }

  return (
    <div>
      <form onSubmit={handleAddTitle}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={titleInput}
          onChange={handleTitleInputChange}
        />
        <button type="submit">Add Title</button>
      </form>
      <h2>Posts from API</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {editId === post.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => handleUpdateTitle(post.id)}>Save</button>
              </>
            ) : (
              <>
                <li key={post.id}>{post.title}</li>
                <button onClick={() => handleDeleteTitle(post.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditTitle(post.id, post.title)}>Update</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIDataHandling