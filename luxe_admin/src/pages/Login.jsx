import React, { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BaseUrlContext } from "../context/BaseUrlContext";
import { UserContext } from "../context/UserContext";

import "../style.css";
import "../input.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const { userPassword, setUserPassword } = React.useContext(UserContext);
	const comment = document.getElementById("comment");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	let navigate = useNavigate();

	function redirect() {
		props.setisNavbarPresent(true);
		navigate("/orders");
	}

	async function handleClick() {
		const response = await axios
			.post(
				`${base_url}/api/v1/Luxuriant/check_password`,
				{ password },
				{
					params: {},
				}
			)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error(error);
				alert("server not running! a simulated response is being sent");
				const response = {
					data: {
						message: "simulation",
					},
				};
				return response;
			});
		// stop showing the svg spinner in login button
		const login_button = document.getElementById("login_button");
		login_button.innerHTML = `Log In`;
		if (response.data.message === "Success") {
			setUserPassword(password);
			redirect();
		} else if (response.data.message === "simulation") {
			console.log("This is a simulation");
			// redirect();
		} else {
			comment.innerHTML = "Incorrect Password";
		}
	}

	const validatePassword = (password) => {
		// make sure password isnt some xss attack using regex
		const regex = /(<([^>]+)>)/gi;
		if (regex.test(password)) {
			return false;
		}
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// show the svg spinner in login button while the password is being validated
		const login_button = document.getElementById("login_button");
		login_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`;

		if (!validatePassword(password)) {
			setPasswordError("Enter Correct Password");
		} else {
			setPasswordError("");
			handleClick();
		}
	};

	const { setTheme } = React.useContext(ThemeContext);

	useEffect(() => {
		setTheme("light");
		const light_button = document.getElementById("light_button");
		light_button.click();
	});

	return (
		<div className="p-0 m-0 bg-base-100">
			<div className="overflow-hidden">
				<div className="lg:flex rubik overflow-hidden">
					<div className="lg:w-1/2 xl:max-w-screen-sm">
						<div className="py-12 bg-base-100 lg:bg-transparent flex justify-center lg:justify-center lg:px-12">
							<div className="cursor-pointer flex flex-col items-center justify-center text-center">
								<div
									id="luxelogo"
									className="w-12 h-12 m-4"
								></div>
								<div className="text-center flex justify-center items-center w-full">
									<div className="text-4xl text-primary-content prata">
										Luxuriant Luxe Admin Page
									</div>
								</div>
							</div>
						</div>
						<div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
							<h2
								className="text-center text-4xl text-primary-content font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
							>
								Log in
							</h2>
							<div
								className="text-center text-xl text-secondary font-display font-semibold lg:text-left xl:text-xl
              xl:text-bold rubik pt-3"
							>
								<span className="italic">
									Please Enter your Master Password to Access
									Accounts
								</span>
								<br></br>
								<span className="text-accent">
									{" "}
									Welcome, Balraj Tavanandi
								</span>
							</div>
							<div className="mt-12">
								<form onSubmit={handleSubmit}>
									<div className="mt-8">
										<div className="flex justify-between items-center">
											<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
												Master Password
											</div>
											<div>
												<NavLink
													className="text-xl font-display font-semibold text-accent hover:text-accent-focus
                                  cursor-pointer"
													to="https://app.cyclic.sh/#/app/balraj2003-luxuriantluxe/vars"
												>
													Forgot Password?
												</NavLink>
											</div>
										</div>
										<input
											className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
											type="password"
											placeholder="Enter your password"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
										{passwordError && (
											<div className="text-red-500 text-sm mt-1">
												{passwordError}
											</div>
										)}
									</div>
									<div
										id="comment"
										className="text-xl text-center mt-10 text-accent"
									>
										Enter Credentials to Log In!
									</div>
									<div className="mt-10">
										<button
											className="bg-primary p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-focus text-primary-content
                          shadow-lg text-xl cursor-pointer"
											id="login_button"
											type="submit"
										>
											Log In
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-center bg-indigo-200 flex-1 h-screen">
						<div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
							<div id="purple" className="w-96 h-96 m-4"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
