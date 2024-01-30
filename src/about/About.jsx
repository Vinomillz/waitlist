import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const About = () => {
	// const Stickyspan = [
	// 	{
	// 		id: 0,
	// 		name: "Extraction 2",
	// 		alt: "extraction 2 ",
	// 		text: "(2023)",
	// 	},
	// 	{
	// 		id: 0,
	// 		name: "Extraction 2",
	// 		alt: "extraction 2 ",
	// 		text: "(2023)",
	// 	},
	// ];

	return (
		<>
			{/* sticky b */}
			<div className='borderx'>
				{/* begining of first span */}
				<span className='elementx'>
					<span>
						<FontAwesomeIcon icon={faHouse} className='iconsX' />
						<Link to='/Home'>
							<a href='/Home'>Home</a>
						</Link>
					</span>
				</span>
				{/* second span  */}
				<span className='elementx'>
					<span>
						<FontAwesomeIcon icon={faUserPlus} />
						<Link to='/waitlist'>
							<a href='/waitlist'>waitlist</a>
						</Link>
					</span>
				</span>
				{/* third span */}
				<span className='elementx'>
					<span className='active'>
						<span className='ienclosed'>i</span>
						<Link to='/About'>
							<a href='/About'>About</a>
						</Link>
					</span>
				</span>
				{/* end of third span */}
			</div>
			{/* sticky ends */}

			<h1>Teulogia</h1>
			<h1>
				What are we <span className='colorgrade'> About</span>
			</h1>

			<h2>Letter from the Founder</h2>
			<span className='elementx'>
				<span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						aliquid debitis repellendus officia harum impedit, earum nihil
						nesciunt, perferendis tempore provident aut! Ullam, culpa non vero
						reprehenderit quia odit aspernatur. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Quisquam, necessitatibus ea! Quis,
						nisi optio culpa ipsum adipisci hic veniam libero! Aliquam officia
						mollitia repudiandae facere exercitationem, ut harum consequatur
						sint quis porro accusamus dolore perspiciatis, error optio maiores.
						Numquam beatae expedita, odio voluptatum deserunt quae dolor placeat
						saepe optio magni? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Eveniet, eos fugiat nemo esse nostrum maiores
						molestiae. Eos sit sapiente a eligendi quo. Earum, quam? Cumque quam
						inventore necessitatibus facilis dolor quis maxime corporis quaerat
						assumenda eius rem laborum amet tempora, doloribus voluptatibus
						praesentium. In dicta amet dolorem optio sequi obcaecati reiciendis
						repellat nulla aut minima dolor quod blanditiis veritatis eligendi
						facere alias ut, exercitationem autem vero et laborum vel earum.
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
						nulla nostrum ratione nemo rem quos sit ea cum corporis facilis,
						quisquam veritatis esse tenetur illum. Culpa ut in dolorem ipsum,
						atque quasi quos nostrum quia voluptatem doloribus dolore impedit
						itaque non laboriosam beatae? Tempora voluptatum amet ullam incidunt
						ipsum nihil hic beatae illum sint doloribus in, debitis et
						doloremque nostrum quidem cum nam officiis perferendis. Totam
						accusantium, esse eveniet dicta eaque, accusamus, at vel repellendus
						aliquam excepturi sed illum odio id reprehenderit error dolor magnam
						saepe. Distinctio, hic? Illum, eos doloremque facere cupiditate
						corrupti ad voluptate nisi reiciendis ratione odit.
					</p>
				</span>
			</span>

			<button className='btnz'> join the waitlist</button>

			<br></br>
			<button className='btnz' id='marginz'>
				 Teulogia/X
			</button>

			<p className='lightText'>
				Teulogia will be available by sometime this year A countdown will be
				created when we get close to release date.
			</p>
		</>
	);
};
