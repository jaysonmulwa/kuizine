import React, { Component, useState } from "react";
import { connect } from "react-redux";

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

class Trending extends Component {
	render() {
		return (
			<div>
				{/*Trending Possts*/}

				<div className="max-w-xl mx-auto mt-3 px-3 py-3 bg-white shadow-md rounded-lg">
					<div className="py-2 flex flex-row items-center justify-between">
						<div className="flex flex-row items-center">
							<span className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
								<div className="text-gray-600 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
									<MdPlusOne
										size="2rem"
										className="bg-gray-200 rounded-full p-2"
									/>
								</div>

								<p className="ml-2 text-base font-medium">
									Trending Posts
								</p>
							</span>
						</div>
					</div>
					<div className="py-2">
						<p className="leading-snug">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Et, ratione dicta deleniti, quas distinctio,
							veniam quo rem eveniet aliquid repudiandae fuga
							asperiores reiciendis tenetur? Eius quidem impedit
							et soluta accusamus.
						</p>
					</div>
				</div>

				{/*Trending Users*/}
				<div className="max-w-xl mx-auto mt-3 px-3 py-3 bg-white shadow-md rounded-lg">
					<div className="py-2 flex flex-row items-center justify-between">
						<div className="flex flex-row items-center">
							<span className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
								<div className="text-gray-600 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
									<MdPlusOne
										size="2rem"
										className="bg-gray-200 rounded-full p-2"
									/>
								</div>

								<p className="ml-2 text-base font-medium">
									Trending Users
								</p>
							</span>
						</div>
						<div className="flex flex-row items-center">
							{/*<p className="text-xs font-semibold text-gray-500">2 hours ago</p>*/}
						</div>
					</div>
					<div className="py-2">
						<p className="leading-snug">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Et, ratione dicta deleniti, quas distinctio,
							veniam quo rem eveniet aliquid repudiandae fuga
							asperiores reiciendis tenetur? Eius quidem impedit
							et soluta accusamus.
						</p>
					</div>
				</div>

				{/* Links */}
				<div className="max-w-xl mx-auto mt-3 px-3 py-3 bg-white shadow-md rounded-lg">
					<div className="py-2 flex flex-row items-center justify-between">
						<div className="flex flex-row items-center">
							<span className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
								<div className="text-gray-600 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
									<MdPlusOne
										size="2rem"
										className="bg-gray-200 rounded-full p-2"
									/>
								</div>

								<p className="ml-2 text-base font-medium">
									Our Partners
								</p>
							</span>
						</div>
					</div>
					<div className="py-2">
						<p className="leading-snug">
							Terms
							<br />
							Privacy Policy
							<br />
							Advertising
							<br />
							Help
							<br />
							Kuizine Inc © 2020. All rights reserved
						</p>
					</div>
				</div>

				{/* Advertising */}
				<div className="max-w-xl mx-auto mt-3 px-3 py-3 bg-white shadow-md rounded-lg">
					<div className="py-2">
						<p className="leading-snug">Advert</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Trending);
