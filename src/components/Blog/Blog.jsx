import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtag} = blog;
    return (
        <div>
            <h2>Blog id: {blog.title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;