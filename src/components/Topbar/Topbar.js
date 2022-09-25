import './Topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-left-items'>
        <p className='topbar-large-text'>Welcome, Josiah &#128075;</p>
        <p className='topbar-smaller-text'>Here's what's happening in your Cake account today.</p>
      </div>
      <div>
        RIGHT ITEMS GOES HERE.
      </div>
    </div>
  )
}

export default Topbar;