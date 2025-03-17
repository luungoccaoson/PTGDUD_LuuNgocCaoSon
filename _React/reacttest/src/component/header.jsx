import './header.css'

import logo from '../img/Lab_03/avatar_small.png'
import search from "../img/Lab_03/search.png"
import cartIcon from '../img/Lab_03/archive_check.png'
import avatar from '../img/Lab02/Avatar 35.png'

export default function Header() {
    var arr = ['What to cook','Recipes','Ingredients','Occasions','About Us'];

    return (
        <>
            <header className='header'>
                <div className='h-left'>
                    <img src={logo} alt="" className='logo'/>
                    <div className='search'>
                        <img src={search} alt="" />
                        <input type="text" placeholder='What would you like to cook?'/>
                    </div>
                </div>
                <nav className='menu'>
                    {
                        arr.map((item)=>{
                            return(
                                <a href="">{item}</a>
                            )
                        })
                    }
                </nav>
                <div className='h-right'>
                    <button className="recipe-box">
                        <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
                        <span>Your Recipe Box</span>
                    </button>
                    <img src={avatar} alt="User Avatar" className="avatar" />
                </div>
            </header>
        </>
    )
}