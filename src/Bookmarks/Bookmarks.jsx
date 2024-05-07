import { PropTypes } from 'prop-types';
import Bookmark from '../components/Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readTimes}) => {
    console.log('under bookmarks',readTimes);
    return (

        <div className="md:w-1/3 bg-slate-300 my-3 ml-4 rounded-xl">
            <div>
                <h1 className='text-xl text-center'>Reading Time: {readTimes}</h1>
            </div>
            <div>
            <h1 className='text-xl text-center my-4'>Bookmark Blog:{bookmarks.length}</h1>
            <div>
            {
                bookmarks.map((book,idx) => <Bookmark key={idx} book={book}></Bookmark>)
            }
            </div>
            </div>
       </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readTimes:PropTypes.number,
}
export default Bookmarks;