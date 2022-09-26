import { FaPlus } from "react-icons/fa";
import './Topbar.css';

const Topbar = ({ onAddNewProduct, isOpened }) => {
  return (
    <div className='topbar'>
      <div className='topbar-left-items'>
        <p className='topbar-large-text'>Welcome, Chief &#128075;</p>
        <p className='topbar-smaller-text'>Another day to do something special, right?.</p>
      </div>
      <div className='topbar-right-items'>
        {/* <div>SEARCH</div> */}
        {/* <div></div> */}
        <button className='add-new-product-btn' onClick={() => onAddNewProduct()}>Add Product <FaPlus className='add-icon'/></button>
      </div>
    </div>
  )
}

export default Topbar;