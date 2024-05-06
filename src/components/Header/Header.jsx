
import profile from '../../assets/profile1.jpg'
const Header = () => {
    return (
        <div>
             <div className="flex justify-between text-center px-4 py-4 border-b-2">
            <h1 className='text-3xl'>Knowledge Cafe</h1>
            <img className="w-12 h-12 rounded-full" src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;