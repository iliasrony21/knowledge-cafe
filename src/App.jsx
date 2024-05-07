import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './Bookmarks/Bookmarks';

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readTimes,setReadTimes] = useState(0);

  const handleBookmark = (blog) =>{
   console.log('bookmark coming soon',blog);
   const bookmarkList = [...bookmarks,blog];
   setBookmarks(bookmarkList);
  }
  const handleReadTime = time =>{
    console.log('clicked read',time);
    const readTime = readTimes + time;
    setReadTimes(readTime);
    // console.log('readtime pamo',readtime);
  }

  return (
    <>
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readTimes={readTimes}></Bookmarks>
     </div>
    </>
  )
}

export default App
