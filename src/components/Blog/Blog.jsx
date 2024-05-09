import PropTypes from 'prop-types';
import './Blog.css'
import { CiBookmark } from 'react-icons/ci';
const Blog = ({ blog,handleBookmark,handleReadTime}) => {
    // console.log(blog);
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtag} = blog;
    return (
        <div className='blog-container mb-4'>
            <img className='images' src={cover} alt="" />
            <div className="flex justify-between my-4">
                <div className='flex'>
                   <img className='w-14 h-16 rounded-full' src={author_img} alt="" />
                   <div className='ml-4 my-3'>
                    <h2>{author}</h2>
                    <h2>{posted_date}</h2>
                   </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>
                  <button className='ml-2' onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl mb-2'>{title}</h2>
            {
                hashtag.map((hash,idx)=> <span className='mr-3' key={idx}>#{hash}</span>)
            }
            <div>

             <button onClick={() => handleReadTime(id,reading_time)} className='text-purple-600 underline my-3'>Mark As Read</button>      
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadTime: PropTypes.func,
}
export default Blog;