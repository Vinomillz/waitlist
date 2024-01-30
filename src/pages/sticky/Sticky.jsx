import "./sticky.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Sticky = () => {
	function changeActive() {
		// alert("change active has been clicked ");
		console.log("change active has been clicked ");
	}

	return (
		<div className='borderx'>
			{/* begining of first span */}
			<span className='elementx'>
				<span onClick={changeActive} className='active'>
					<FontAwesomeIcon icon={faHouse} className='iconsX' />
					<Link to='/Home'>
						<a href='/Home'>Home</a>
					</Link>
				</span>
			</span>
			{/* second span  */}
			<span className='elementx'>
				<span onClick={changeActive}>
					<FontAwesomeIcon icon={faUserPlus} />
					<Link to='/waitlist'>
						<a href='/waitlist'>waitlist</a>
					</Link>
				</span>
			</span>
			{/* third span */}
			<span className='elementx'>
				<span onClick={changeActive}>
					<span className='ienclosed'>i</span>
					<Link to='/About'>
						<a href='/About'>About</a>
					</Link>
				</span>
			</span>
			{/* end of third span */}
		</div>
	);
};
