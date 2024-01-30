// import { Sticky } from "../sticky/sticky";
import React from "react";
import "./waitlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";

export const Waitlist = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Take", " Insight", " Board"],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div>
			{/* sticky b */}
			<div className='borderx'>
				<span className='elementx'>
					<span>
						<FontAwesomeIcon icon={faHouse} className='iconsX' />
						<a href='/Home'>Home</a>
					</span>
				</span>
				<span className='elementx'>
					<span className='active'>
						<FontAwesomeIcon icon={faUserPlus} />
						<a href='/waitlist'>waitlist</a>
					</span>
				</span>
				<span className='elementx'>
					<span>
						<span className='ienclosed'>i</span>
						<a href='/About'>About</a>
					</span>
				</span>
			</div>
			{/* sticky ends */}
			<h1>Teulogia</h1>

			<h2>
				Join the waitlist for Teulogia: <span className="el" ref={el} />
				
			</h2>
			<span>
				<FontAwesomeIcon icon={faUser} />
			</span>
			<input type='text' placeholder='Full name' className='inputz' />
			<br />
			<span>
				<FontAwesomeIcon icon={faEnvelope} />
			</span>
			<input type='email' placeholder='Email' className='inputz' />
			<br />

			<button className='btnz'> join the waitlist</button>

			<br></br>
			<button className='btnz' id='marginz'>
				 Teulogia/X
			</button>

			<p className='lightText'>
				Teulogia will be available by sometime this year A countdown will be
				created when we get close to release date.
			</p>
		</div>
	);
};
