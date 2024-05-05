import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            <h1 className='text-3xl text-center text-bold'>Knowledge Cafe</h1>
            <h1 className='text-3xl text-center text-bold'>Length:{blogs.length}</h1>
        </div>
    );
};

export default Blogs;