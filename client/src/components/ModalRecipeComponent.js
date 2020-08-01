import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Form, FormGroup, Button } from "reactstrap";

import { getItems } from "../actions/itemActions";
import { recipe, getRecipes } from "../actions/recipeActions";
import { clearErrors } from "../actions/errorActions";

class ModalRecipe extends Component {
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

	componentDidMount() {
		if (this.props.show) {
			const recipe_section = document.querySelector(".recipe-section");

			recipe_section.classList.toggle("hidden");

			this.setState({
				activeRecipeButton: "recipe_content",
			});

			const btn_comments = document.querySelector(".btn-comments");
			btn_comments.classList.toggle("text-luminous-red");
		}
	}
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	toggleRecipeButtons = (tab) => {
		const currentState = this.state.activeRecipeButton;

		const comments_section = document.querySelector(".comments-section");
		const recipe_section = document.querySelector(".recipe-section");

		const btn_comments = document.querySelector(".btn-comments");
		const btn_recipe = document.querySelector(".btn-recipe");

		this.setState({
			activeRecipeButton: tab,
		});

		if (currentState === "recipe_content") {
			if (tab === "recipe_content") {
				//Do Nothing
			} else if (tab === "recipe_comments") {
				recipe_section.classList.toggle("hidden");
				comments_section.classList.toggle("hidden");

				btn_recipe.classList.toggle("text-luminous-red");
				btn_comments.classList.toggle("text-luminous-red");
			}
		} else if (currentState === "recipe_comments") {
			if (tab === "recipe_content") {
				recipe_section.classList.toggle("hidden");
				comments_section.classList.toggle("hidden");

				btn_comments.classList.toggle("text-luminous-red");
				btn_recipe.classList.toggle("text-luminous-red");
			} else if (tab === "recipe_comments") {
				//Do nothing
			}
		}
	};

	render() {
		if (this.props.show) {
			return (
				<div className="modal-recipe fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"
						onClick={(e) => {
							this.onClose(e);
						}}
					></div>

					<div className="modal-container bg-white w-screen h-full md:max-w-full rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-3 text-left px-3 min-h-screen">
							<div className="flex justify-between items-center pb-3">
								<p className="text-2xl font-bold text-luminous-red">
									{" "}
									Recipe Modal
								</p>
								<div
									className="modal-close cursor-pointer z-50"
									onClick={(e) => {
										this.onClose(e);
									}}
								>
									<svg
										className="fill-current text-black"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
									>
										<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
									</svg>
								</div>
							</div>

							<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
								<div className="bg-gray-200 h-full">
									<img
										className="object-cover w-full rounded-lg"
										src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"
										src={`/_img_uploads/_recipe/${this.props.recipeStateObj.recipe_image}`}
										alt=""
									/>
								</div>

								<div className="bg-gray-0">
									<div className="grid grid-cols-1 gap-2">
										<div className="block font-bold uppercase">
											<p
												className="text-grey-700 text-2xl m-2"
												style={{
													fontFamily:
														"Righteous, serif",
												}}
											>
												{
													this.props.recipeStateObj
														.recipe_name
												}
											</p>
										</div>
										<div className="block">
											<div className="flex bg-gray-200">
												<div className="flex-1 text-gray-700 text-center bg-gray-400 px-2 py-2">
													{/*<div className="flex flex-row items-center justify-between">
										              <div className="flex flex-row items-center">
										                <a href="#" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
										                  <img className="rounded-full h-8 w-8 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt=""/>
										                  <p className="ml-2 text-base font-medium">John Doe</p>
										                </a>
										              </div>
										              
										            </div>*/}
													<p className="items-center justify-between">
														Prep Time
													</p>
												</div>
												<div className="flex-1 text-gray-700 text-center bg-gray-400 px-2 py-2">
													<p className="items-center justify-between">
														{
															this.props
																.recipeStateObj
																.time
														}
													</p>
												</div>
												<div className="flex-1 text-gray-700 text-center bg-gray-400 px-2 py-2">
													<p className="items-center justify-between">
														{
															this.props
																.recipeStateObj
																.origin
														}
													</p>
												</div>
											</div>
										</div>
										<div className="block ">
											<div className="flex flex-row-reverse">
												<div
													onClick={() => {
														this.toggleRecipeButtons(
															"recipe_comments"
														);
													}}
												>
													<button className="btn-comments bg-gray-300 text-luminous-red font-bold py-2 px-4 mx-1 rounded-full">
														<p className="font-medium">
															Comments
														</p>
													</button>
												</div>

												<div
													onClick={() => {
														this.toggleRecipeButtons(
															"recipe_content"
														);
													}}
												>
													<button
														className="btn-recipe bg-gray-300 text-luminous-red font-bold py-2 px-4 mx-1 rounded-full"
														onClick={
															this
																.toggleRecipeButtons
														}
													>
														<p className="font-medium">
															Recipe
														</p>
													</button>
												</div>
											</div>
										</div>

										<div className="block">
											<div className="recipe-section block hidden">
												<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2">
													<div className="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-blue-0 rounded-md shadow-md p-4">
														<p
															className="text-grey-700 text-base"
															style={{
																fontFamily:
																	"Righteous, serif",
															}}
														>
															INGREDIENTS
														</p>
														<p
															className=""
															style={{
																whiteSpace:
																	"pre-wrap",
															}}
														>
															{
																this.props
																	.recipeStateObj
																	.ingredients
															}
														</p>
													</div>
													<div className="sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 bg-yellow-0 rounded-md shadow-md p-4">
														<p
															className="text-grey-700 text-base"
															style={{
																fontFamily:
																	"Righteous, serif",
															}}
														>
															INSTRUCTIONS
														</p>

														<p
															className=""
															style={{
																whiteSpace:
																	"pre-wrap",
															}}
														>
															{
																this.props
																	.recipeStateObj
																	.steps
															}
														</p>
													</div>
												</div>
											</div>

											<div className="comments-section block  bg-pink-400 hidden">
												Comments
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state) => ({
	recipe_item: state.recipe,
	isAuthenticated: state.auth.isAuthenticated,
	isPublished: state.recipe.isPublished,
	error: state.error,
});

export default connect(mapStateToProps, { recipe, clearErrors })(ModalRecipe);
