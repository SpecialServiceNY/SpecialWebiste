import React, { useState } from 'react';
import './Inspire.css';

function Inspire() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to the forum', content: 'This is the first post.', author: 'Admin' },
    { id: 2, title: 'Second post', content: 'This is another post.', author: 'User1' },
    { id: 3, title: 'Tech post', content: 'Discussing technology.', author: 'TechGuru' },
  ]);
  const [newPost, setNewPost] = useState({ name: '', title: '', content: '' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = posts.length + 1;
    const newPostWithId = { ...newPost, id: newId, author: 'New User' };
    setPosts([...posts, newPostWithId]);
    setNewPost({ name: '', title: '', content: '' });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="forum-page">
      <header>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <section className="posts-list">
        {filteredPosts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><strong>{post.author}</strong></p>
          </div>
        ))}
      </section>
      <footer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="content"
            placeholder="Write your post here..."
            value={newPost.content}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </footer>
    </div>
  );
}

export default Inspire;