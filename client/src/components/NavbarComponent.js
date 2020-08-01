import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
	MdHome,
	MdPersonOutline,
	MdBookmarkBorder,
	MdShoppingBasket,
	MdDescription,
	MdAdd,
	MdSearch,
	MdPlusOne,
} from "react-icons/md";

import "boxicons";

import PropTypes from "prop-types";

class Navbar extends Component {
	state = {
		menuToggle: true,
		profileMenuToggle: true,
	};

	componentDidMount() {}

	toggleMenu = () => {
		this.setState({
			menuToggle: !this.state.menuToggle,
		});

		console.log(this.state.menuToggle);

		const addMenu = document.querySelector(".add-menu");

		addMenu.classList.toggle("hidden");
	};

	toggleProfileMenu = () => {
		this.setState({
			profileMenuToggle: !this.state.profileMenuToggle,
		});

		console.log(this.state.profileMenuToggle);

		const profileMenu = document.querySelector(".profile-menu");

		profileMenu.classList.toggle("hidden");
	};

	render() {
		return (
			<div className="sticky top-0 z-40 shadow-md max-w-full">
				<nav className="navcolor flex flex-row items-center justify-between bg-luminous-red p-3">
					<div className="flex flex-1  flex-shrink text-white">
						<svg
							className="fill-current h-8 w-8 ml-3"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
						<p
							className="text-white text-opacity-100 text-2xl ml-4"
							style={{ fontFamily: "Righteous, serif" }}
						>
							kuizine
						</p>
					</div>

					<div className="flex flex-1 flex-shrink items-center flex-row-reverse text-gray-700 text-center relative ">
						<div className="text-red-600 text-center ml-2 sm:pl-2 md:pl-2 md:invisible lg:hidden xl:hidden">
							<MdHome size="2rem" className="" />
						</div>

						<button className="outline-none focus:outline-none rounded-full bg-red-700 mx-3">
							<div
								className="text-gray-200 text-center relative"
								onClick={() => {
									this.toggleProfileMenu();
								}}
							>
								<MdPersonOutline
									size="2rem"
									className="hover:text-white p-1"
								/>

								<div className="profile-menu origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg hidden">
									<div className="rounded-md bg-white shadow-xs">
										<div className="py-1">
											<form method="POST" action="#">
												<button
													type="submit"
													className="block w-full text-left px-4 py-2 text-sm leading-snug text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
												>
													Sign out
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</button>

						<button className="outline-none focus:outline-none rounded-full bg-red-700 mx-3">
							<div className="text-gray-100 text-center">
								<MdSearch
									size="2rem"
									className="hover:text-white p-1"
									onClick={this.toggleMenu}
								/>
							</div>
						</button>

						<button className="outline-none focus:outline-none rounded-full bg-red-700 mx-3">
							<div
								className="text-gray-200 text-center relative"
								onClick={() => {
									this.toggleMenu();
								}}
							>
								<MdAdd
									size="2rem"
									className="hover:text-white p-1"
								/>

								<div className="add-menu origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg hidden">
									<div className="rounded-md bg-white shadow-xs">
										<div className="py-1">
											{/*<a
												href="#"
												className="block px-4 py-2 text-left text-sm leading-snug text-gray-600 hover:bg-gray-200 hover:text-luminous-red focus:outline-none focus:bg-gray-200 focus:text-luminous-red"
											>
												Write a Post
											</a>*/}
											<a
												href="#"
												className="block px-4 py-2 text-left text-sm leading-snug text-gray-600 hover:bg-gray-200 hover:text-luminous-red focus:outline-none focus:bg-gray-200 focus:text-luminous-red"
											>
												Publish Recipe
											</a>
										</div>
									</div>
								</div>
							</div>
						</button>
					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
