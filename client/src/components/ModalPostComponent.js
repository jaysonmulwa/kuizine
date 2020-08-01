import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Form, FormGroup, Button } from "reactstrap";

import { post } from "../actions/postActions";
import { clearErrors } from "../actions/errorActions";

class ModalPost extends Component {
	state = {
		post_dtl: "",
		file: [],
		filename: null,
		tempfile: null,
		msg: null,
		isNew: true,
		activeRecipeButton: "",
		recipeState: [],
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		clearErrors: PropTypes.func.isRequired,
	};

	componentDidMount() {}

	componentDidUpdate(prevProps) {
		const { error } = this.props;

		const { isPublished } = this.props;

		if (error !== prevProps.error) {
			//check for register error
			if (error.id === "POST_FAIL") {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			}
		}
	}

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

	handlePostSubmit = (event) => {
		event.preventDefault();

		const { post_dtl, file, filename } = this.state;

		//Create user object
		const newPost = {
			post_dtl,
			file,
			filename,
		};

		console.log(newPost);

		//Attempt to register
		this.props.post(newPost);
	};

	render() {
		if (this.props.show) {
			return (
				<div class="modal-post fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
					<div
						class="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"
						onClick={(e) => {
							this.onClose(e);
						}}
					></div>

					<div class="modal-container bg-white w-screen md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div class="modal-content py-3 text-left px-3">
							<div class="flex justify-between items-center pb-3">
								<p class="text-2xl font-bold text-luminous-red">
									{" "}
									Create Post
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

							<Form onSubmit={this.handlePostSubmit}>
								<FormGroup>
									<label
										className="block text-gray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									></label>

									<textarea
										type="text"
										name="post_dtl"
										id="post_dtl"
										rows="3"
										cols="50"
										className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
										placeholder="What's Cooking Today?"
										onChange={this.onChange}
									></textarea>

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
											<p className="font-medium">Post</p>
										</button>
									</div>
								</FormGroup>
							</Form>
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
	post_item: state.post,
	isAuthenticated: state.auth.isAuthenticated,
	isPublished: state.post.isPublished,
	error: state.error,
});

export default connect(mapStateToProps, { post, clearErrors })(ModalPost);
