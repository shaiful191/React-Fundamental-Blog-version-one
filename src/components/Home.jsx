import React, { useState } from 'react'
import BlogLIst from './BlogLIst';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) => {
  setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };


  return (
    <div className="home">
      <BlogLIst blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Home
