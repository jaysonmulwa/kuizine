import React, { Component } from "react";
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

import ModalPublish from "./ModalPublishComponent.js";

class Menu extends Component {
	state = {
		modal: false,
	};

	togglePublishModal = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};

	render() {
		return (
			<div>
				{/*className:divleft hides for small screen*/}
				<div className="fixed top-auto pt-3 w-1/4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdHome
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Home</span>
							</div>
						</button>
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdBookmarkBorder
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Bookmarks</span>
							</div>
						</button>
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdShoppingBasket
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Buy Ingredients</span>
							</div>
						</button>

						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdDescription
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Eat Out</span>
							</div>
						</button>
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdSearch
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Search Recipes</span>
							</div>
						</button>
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdPlusOne
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Curated Recipes</span>
							</div>
						</button>
					</div>

					<div className="mt-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
						<button
							className="outline-none focus:outline-none"
							onClick={this.togglePublishModal}
						>
							{/*onClick={this.togglePublishModal}*/}

							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdAdd
									size="3rem"
									className="text-luminous-red bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Publish Recipe</span>
							</div>
						</button>
						<button className="outline-none focus:outline-none">
							<div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-medium hover:text-luminous-red rounded-lg">
								<MdPersonOutline
									size="3rem"
									className="bg-gray-200 rounded-full p-2"
								/>
								<span className="ml-3">Profile</span>
							</div>
						</button>
					</div>
				</div>

				<ModalPublish
					show={this.state.modal}
					onClose={this.togglePublishModal}
				/>
			</div>
		);
	}
}

export default Menu;
