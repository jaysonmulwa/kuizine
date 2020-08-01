import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Form, FormGroup, Button } from "reactstrap";

import { getItems } from "../actions/itemActions";
import { recipe, getRecipes } from "../actions/recipeActions";
import { clearErrors } from "../actions/errorActions";

class ModalPublish extends Component {
	state = {
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
		recipeState: [],
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		recipe: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired,
	};

	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	FileOnChange = (e) => {
		if (typeof e.target.files[0] != "undefined") {
			const initState = this.state.filename;
			const initFileState = this.state.isNew;

			//if first time- if is false
			if (initState == null) {
				this.setState({
					isNew: false,
				});
			}

			this.setState({ file: e.target.files[0] });
			this.setState({ filename: e.target.files[0].name });
			this.setState({ tempfile: URL.createObjectURL(e.target.files[0]) });

			//Toggle only for first time
			if (initFileState == true) {
				const imagepreview = document.querySelector(".imagepreview");
				imagepreview.classList.toggle("hidden");
			}
		}

		console.log(this.state);
	};

	handlePublishSubmit = (event) => {
		event.preventDefault();

		const {
			recipe_name,
			ingredients,
			steps,
			time,
			origin,
			file,
			filename,
		} = this.state;

		//Create user object
		const newRecipe = {
			recipe_name,
			ingredients,
			steps,
			time,
			origin,
			file,
			filename,
		};

		console.log(newRecipe);

		//Attempt to send new Recipe
		this.props.recipe(newRecipe);
	};

	render() {
		{
			/*console.log(this.props.show);*/
		}

		if (this.props.show) {
			return (
				<div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
					<div
						class="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"
						onClick={(e) => {
							this.onClose(e);
						}}
					></div>

					<div class="modal-container bg-white w-screen md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
						{/*<div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-3 mr-3 text-white text-sm z-50" onClick = {this.togglePublishModal}>
					        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
					          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
					        </svg>
					    
					      </div>*/}

						<div class="modal-content py-3 text-left px-3">
							<div class="flex justify-between items-center pb-3">
								<p class="text-2xl font-bold text-luminous-red">
									{" "}
									Publish recipe
								</p>
								<div
									class="modal-close cursor-pointer z-50"
									onClick={(e) => {
										this.onClose(e);
									}}
								>
									<svg
										class="fill-current text-black"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
									>
										<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
									</svg>
								</div>
							</div>

							{this.state.msg ? (
								<div class="text-left mb-3">
									<div
										class="p-2 bg-gray-200 items-center text-white leading-none rounded-full flex md:inline-flex w-full"
										role="alert"
									>
										<svg
											class="fill-current h-6 w-6 text-luminous-red bg-gray-200 mr-2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
										</svg>
										<span class="mr-3 text-left text-gray-600 flex-auto ">
											{this.state.msg}
										</span>
									</div>
								</div>
							) : null}

							<Form onSubmit={this.handlePublishSubmit}>
								<FormGroup>
									<label
										className="block text-gray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Recipe name
									</label>

									<input
										type="text"
										name="recipe_name"
										id="recipe_name"
										className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
										placeholder="Name"
										onChange={this.onChange}
									/>

									<label
										className="block text-gray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Ingredients
									</label>

									<textarea
										type="text"
										name="ingredients"
										id="ingredients"
										rows="3"
										cols="50"
										className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
										placeholder="1. ..."
										onChange={this.onChange}
									></textarea>

									<label
										className="block text-gray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Steps
									</label>

									<textarea
										type="text"
										name="steps"
										id="steps"
										rows="3"
										cols="50"
										className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
										placeholder="1. ..."
										onChange={this.onChange}
									></textarea>

									<div class="grid grid-cols-2 gap-2">
										<div className="">
											<label
												className="block text-gray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Preparation Time
											</label>

											<input
												type="text"
												name="time"
												id="time"
												className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
												placeholder="Time"
												onChange={this.onChange}
											/>
										</div>

										<div className="">
											<label
												className="block text-gray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Recipe Origin
											</label>

											<select
												type="text"
												name="origin"
												id="origin"
												className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
												placeholder="Recipe Origin"
												onChange={this.onChange}
											>
												<option value="African">
													African
												</option>
												<option value="American">
													American
												</option>
												<option value="Spanish">
													Spanish
												</option>
												<option value="Middle-Eastern">
													Middle-Eastern
												</option>
												<option value="Scandinavian">
													Scandinavian
												</option>
												<option value="Indian">
													Indian
												</option>
												<option value="Chinese">
													Chinese
												</option>
												<option value="Italian">
													Italian
												</option>
												<option value="Random">
													Random
												</option>
											</select>
										</div>
									</div>

									<div>
										<img
											style={{ maxHeight: "8rem" }}
											className="imagepreview hidden mx-auto mb-3 rounded-md shadow-md focus:outline-none focus:shadow-outline w-1/2"
											src={this.state.tempfile}
										/>
									</div>

									<div className="flex justify-start">
										<label className="font-medium shadow-md text-center inline-block cursor-pointer p-2 bg-gray-200 text-gray-600 active:bg-gray-600 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-1/2">
											<p className="font-medium">
												Add Photo
											</p>
											<input
												className="bg-gray-600 hidden"
												type="file"
												name="customFile"
												id="customFile"
												onChange={this.FileOnChange}
											/>
										</label>

										<button
											className="shadow-md bg-luminous-red text-white active:bg-gray-600 font-bold px-6 py-3 rounded-full hover:shadow-md hover:bg-red-600 outline-none focus:outline-none mr-1 mb-1 w-1/2"
											type="submit"
										>
											<p className="font-medium">
												Publish
											</p>
										</button>
									</div>
								</FormGroup>
							</Form>

							{/*<div class="flex justify-end pt-2">
					          <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
					          <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick = {this.togglePublishModal}>Close</button>
					        </div>*/}
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

export default connect(mapStateToProps, { recipe, clearErrors })(ModalPublish);
