import React, {useState, useContext} from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import ProductContext from '../context/ProductContext';
import CartContext from '../context/CartContext';

function Navbar() {

    const { searchProducts  } = useContext(ProductContext);
    const { totalQuantity } = useContext(CartContext);

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState();

    const navigate = useNavigate()

    const openSignUp = () => {
        setIsLogin(false)
        setIsModelOpen(true);
    }

    const openLogin = () => {
        setIsLogin(true)
        setIsModelOpen(true);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchProducts(search);
        navigate("/filter-data");
      };

  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'> 
                <Link to='/'>Shop</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}>
                    <input
                        className='w-full border py-2 px-4' 
                        type="text" 
                        placeholder='Search product'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/cart" className='relative'>
                    <FaShoppingCart className='text-lg' />
                    {totalQuantity > 0 && (
                        <span className='absolute -top-1 text-xs w-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                            {totalQuantity}
                        </span>
                    )}
                </Link>
                <button 
                    className='hidden md:block'
                    onClick={() => setIsModelOpen(true)}
                >
                    Login | Register
                </button>
                <button className='block md:hidden'>
                    <FaUser />
                </button>
            </div>
        </div>

        <div className='flex items-center justify-center space-x-10 py-3 font-bold'>
            <Link className='hover:underline' to="/">Home</Link>
            <Link className='hover:underline' to="/shop">Shop</Link>
            <Link className='hover:underline' to="/">Contact</Link>
            <Link className='hover:underline' to="/">About</Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
        </Modal>
    </nav>
  )
}

export default Navbar