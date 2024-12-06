import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Delight in Every Bite: Discover Our Menu</h1>
            <p className="explore-menu-text">
                Welcome to a world of irresistible flavors and endless options! Whether you're planning a quiet night in, a lively gathering with friends, or a family meal, our menu has something to excite every taste bud. Carefully crafted with the freshest ingredients and a passion for quality, every dish we serve is a celebration of great food and convenience. From comforting classics to bold new creations, we offer a diverse range of options that cater to every preference.
            </p>
            <div className='explore-menu-list'>
                {
                    menu_list.map((item, index) => (
                        <div
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            key={index}
                            className="explore-menu-list-item"
                        >
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
