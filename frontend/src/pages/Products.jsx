import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
// import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconMail,
	IconPhoneCall
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Products = () => {
	// const navigate = useNavigate();
	const {theme} = React.useContext(ThemeContext);
	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
	});
	return (
		<div>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-4xl bulgatti" id="intro">
				Our Products
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				some sort of carousal
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				jar 1 pics, description, price, add to cart button
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				jar 2 pics, description, price, add to cart button
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				jar 3 pics, description, price, add to cart button
			</section>
			<footer className="footer footer-center p-10 bg-secondary text-primary-content bottom-0">
				<aside>
					<div id="luxelogo" className="w-20 h-20 bg-center snap-center self-center"
					></div>
					<p className="dancing text-3xl"><span className="text-2xl prata">Luxuriant Luxe</span><br/>Your Skin Our
						Priority</p>
					<p>Copyright © 2023 - All right reserved</p>
					<a className="link">Privacy Policy</a>
				</aside>
				<nav className="">
					<div className="flex flex-wrap justify-center items-center gap-4 w-2/3 lg:w-fit">
						<a
							href="https://wa.me/917666018928?text=Welcome%20to%20Luxuriant%20Luxe!%20How%20can%20we%20help%20you%20today%3F%20"
						>
							<IconBrandWhatsapp className="w-8 h-8"/>
						</a>
						<a href="https://www.instagram.com/luxuriant_luxe"
						>
							<IconBrandInstagram className="w-8 h-8"/>
						</a>
						<a href="https://www.facebook.com/profile.php?id=61551508050876"
						>
							<IconBrandFacebook className="w-8 h-8"/>
						</a>
						{/*<a*/}
						{/*	href=""*/}
						{/*>*/}
						{/*	<IconBrandTelegram className="w-8 h-8"/>*/}
						{/*</a>*/}
						<a
							href="https://www.linkedin.com/in/luxuriant-luxe-1b852a292"
						>
							<IconBrandLinkedin className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open mail client
								() => {
									window.location.href = "mailto:luxeluxuriant@gmail.com";
								}
							}
						>
							<IconMail className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open phone client
								() => {
									window.location.href = "tel:+917666018928";
								}
							}
						>
							<IconPhoneCall className="w-8 h-8"/>
						</a>
						<ScrollToTopButton/>
					</div>
				</nav>
			</footer>
		
		</div>
	)
}

export default Products
