import React, { Component } from "react";
import { connect } from "react-redux";

import { recipe, getRecipes } from "../actions/recipeActions";
import { clearErrors } from "../actions/errorActions";

import PropTypes from "prop-types";

import ModalRecipe from "./ModalRecipeComponent.js";

class Timeline extends Component {
	state = {
		modal: false,
		recipe_modal: false,
		post_modal: false,
		recipe_name: "",
		ingredients: "",
		steps: "",
		time: "",
		origin: "",
		file: [],
		filename: null,
		tempfile: null,
		msg: null,
		isNew: true,
		isLoad: true,
		activeRecipeButton: "",
		recipeState: [],
	};

	static propTypes = {
		getRecipes: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
		isLoading: PropTypes.bool,
		error: PropTypes.object.isRequired,
		recipe: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getRecipes();

		/*const recipe_section = document.querySelector(".recipe-section");

		recipe_section.classList.toggle("hidden");

		this.setState({
			activeRecipeButton: "recipe_content",
		});

		const btn_comments = document.querySelector(".btn-comments");
		btn_comments.classList.toggle("text-luminous-red");*/
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props;

		const { isPublished } = this.props;

		if (error !== prevProps.error) {
			//check for register error
			if (error.id === "PUBLISH_FAIL") {
				this.setState({ msg: error.msg.msg });
			} else if (error.id === "GET_ITEMS_FAIL") {
				this.setState({ msg: error.msg.msg });

				console.log("Errr");
			} else {
				this.setState({ msg: null });
			}
		}

		//if published successfull close modal
	}

	toggleRecipeModal = (recipe_id, index) => {
		//console.log(recipe_id);

		const { recipe_items } = this.props.recipe_item;

		if (!this.state.recipe_modal) {
			//console.log(recipe_items[index["index"]]);

			this.setState({
				recipeState: recipe_items[index["index"]],
			});
		}

		this.setState({
			recipe_modal: !this.state.recipe_modal,
		});
	};

	render() {
		const { recipe_items } = this.props.recipe_item;

		const { isLoading } = this.props;

		if (isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<div className="grid grid-cols-1 gap-6 my-3 px-0 md:px-0 lg:px-0 block">
						{/*3*/}

						{recipe_items ? (
							recipe_items.map(
								(
									{
										_id,
										recipe_name,
										origin,
										time,
										recipe_image,
									},
									index
								) => (
									<div
										className="max-w-xl w-full mx-auto px-4 py-3 bg-white shadow-md rounded-lg"
										key={index}
									>
										<div className="py-1 flex flex-row flex-shrink-0 items-center justify-between">
											<div className="flex flex-row items-center">
												<a
													href="#"
													className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
												>
													<img
														className="rounded-full h-12 w-12 object-cover"
														src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
														alt=""
													/>

													<div className="flex flex-column items-center">
														<p className="text-sm font-medium">
															Jon Doe
														</p>
														<p className="ml-2 text-xs font-medium text-gray-600">
															2 hours ago
														</p>
													</div>
												</a>
											</div>

											<div className="flex flex-column text-left">
												<p className="text-xs font-medium text-gray-600">
													Origin: {origin}
												</p>
												<p className="text-xs font-medium text-gray-600">
													Time: {time}
												</p>
											</div>
										</div>

										<div className="py-1 flex flex-row items-center justify-between flex-shrink-0">
											<div className="flex flex-row items-center">
												<p className="text-sm font-medium uppercase">
													{recipe_name}
												</p>
											</div>
										</div>

										<div className="mt-2">
											<div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-600 pb-2/3">
												<img
													className="absolute object-cover w-full h-full rounded-lg cursor-pointer"
													onClick={() => {
														this.toggleRecipeModal(
															{ _id },
															{ index }
														);
													}}
													src={`/_img_uploads/_recipe/${recipe_image}`}
													alt=""
												/>
											</div>
											{/*src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"*/}

											<div className="py-2 flex flex-row justify-around items-center">
												<button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
													<svg
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
														className="w-5 h-5"
													>
														<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
													</svg>
													<span className="ml-1">
														3431
													</span>
												</button>
												<button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
													<svg
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
														className="w-5 h-5"
													>
														<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
													</svg>
													<span className="ml-1">
														566
													</span>
												</button>
												<button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
													<svg
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
														className="w-5 h-5"
													>
														<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
													</svg>
													<span className="ml-1">
														340
													</span>
												</button>
											</div>
										</div>
									</div>
								)
							)
						) : (
							<div>
								Unable to load. Check your connection and try
								again.
							</div>
						)}

						{/*3*/}
					</div>
					<ModalRecipe
						show={this.state.recipe_modal}
						recipeStateObj={this.state.recipeState}
						onClose={this.toggleRecipeModal}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	recipe_item: state.recipe,
	isAuthenticated: state.auth.isAuthenticated,
	isPublished: state.recipe.isPublished,
	isLoading: state.recipe.loading,
	error: state.error,
});

export default connect(mapStateToProps, { recipe, clearErrors, getRecipes })(
	Timeline
);
