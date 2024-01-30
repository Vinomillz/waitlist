import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Sticky } from "../sticky/sticky";

export const Home = () => {
	return (
		<>
			<Sticky />
			<h1>Teulogia</h1>
			<h2>
				Real-Time <p className='colorgrade'>Asl Translation</p>reimagined in
				real life
			</h2>
			<span className='circleEnclosed'>
				<FontAwesomeIcon icon={faArrowDown} />
			</span>
			<p>
				<p className='colorgrade'>Take </p>
				by Publikeep is a place to unleash your creativity across a canvas of
				videos, texts, audios, and immersive short self stories we like to call
				<p className='colorgrade'> Glimpses</p> Express yourself beyond
				limitations, connect with a vast range of people, and discover a world
				of vibrant, engaging and authentic stories waiting to be told.
			</p>
			<img className='phoneImages' src='./images/phonecus.svg' alt='fir' />
			<p>
				<p className='colorgrade'>Resonance </p>
				by Publikeep is your stage to amplify your voice, ignite empathy, and
				leave an echo that lasts. Express yourself through your videos, make
				long lasting <p className='colorgrade'>chronicles </p> about your life,
				ideals and ideas and engage with your audience on a whole different
				level.
			</p>
			<img className='phoneImages' src='./images/iphoneimg2.svg' alt='' />
			<p>
				<p className='colorgrade'>Insight</p> by Publikeep is created for users
				to find clarity, beyond the headlines, beyond the spin. Uncover curated
				news, explore diverse perspectives, and spark meaningful conversations
				fueled by verified facts and critical thinking and fact checked by
				individuals and AI. Dive deeper, think sharper, connect with the bigger
				picture. Your compass to an informed future awaits.
			</p>
			<img className='phoneImages' src='./images/iphoneimg3.svg' alt='' />
			<p>
				<p className='colorgrade'>Board </p> by Publikeep is your market
				decoder, tomorrows finance hub. Unravel company insights today, navigate
				your financial future flawlessly. Board gives you company insights today
				and tomorrow it will handle your payments too.
			</p>
			<img className='phoneImages' src='./images/iphoneiimg4.svg' alt='' />
			<h2>
				<h2 className='colorgrade'>Teulogia</h2> is under active development and
				will be available on web and mobile this year
			</h2>
			<button className='btn'> join the waitlist</button>
			<button className='btn'>
				{" "}
				<a href='https://x.com/Vinomillz_'>  Twitter/X</a>
			</button>
			{/* <FontAwesomeIcon icon={faXTwitter} /> */}

			<br />
			<span> © 2024 Teulogia</span>
		</>
	);
};
