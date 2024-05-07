import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark,handleReadTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
            <div className="md:w-2/3">
             <h1 className='text-3xl'>Blogs</h1>
             {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blog>)
             }
            </div>
        
    );
};

Blogs.propTypes = {
    handleBookmark:PropTypes.func,
    handleReadTime:PropTypes.func,
}

export default Blogs;