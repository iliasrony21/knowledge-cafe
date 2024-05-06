import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleBookmark = (blog) =>{
   console.log('bookmark comming soon',blog);
  }

  return (
    <>
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmark={handleBookmark}></Blogs>
      <Bookmark></Bookmark>
     </div>
    </>
  )
}

export default App
