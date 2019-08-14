import React from 'react';

const TopMenu = () => {
    return (
    	<div className="menu__top">
	    	<div className="menu__top_wrapper">
	            <div className="menu__top_left">
	            	<a href="mailto:cmarcjoseph@gmail.com">cmarcjoseph@gmail.com</a>
	            	<a href="tel:5146165209">514 616 5209</a>
	            </div>
	            <div className="menu__top_right">
	        		<ul className="socials">
		                <li><a href="http://www.facebook.com">facebook</a></li>
		                <li><a href="http://www.twitter.com">twitter</a></li>
		                <li><a href="http://www.linkedin.com">linkedin</a></li>
		            </ul>
	            </div>
	    	</div>
        </div>
    );
}

export default TopMenu;