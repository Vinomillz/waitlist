import "./sticky.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

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
					<a href='/Home'>Home</a>
				</span>
			</span>
			{/* second span  */}
			<span className='elementx'>
				<span onClick={changeActive}>
					<FontAwesomeIcon icon={faUserPlus} />
					<a href='/waitlist'>waitlist</a>
				</span>
			</span>
			{/* third span */}
			<span className='elementx'>
				<span onClick={changeActive}>
					<span className='ienclosed'>i</span>
					<a href='/About'>About</a>
				</span>
			</span>
			{/* end of third span */}
		</div>
	);
};
