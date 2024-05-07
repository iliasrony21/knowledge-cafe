import { PropTypes } from 'prop-types';

const Bookmark = ({book}) => {
    // console.log('bookmark koi',book);
    const {title} = book;

  return (
    <div className="bg-slate-200 p-4 mx-4 rounded-xl mb-2">
      <h1 className='text-xl'>{title}</h1>
      <div>
       
      </div>
    </div>
  );
};

Bookmark.propTypes = {
    book:PropTypes.object,
}

export default Bookmark;
