import React, { Component } from "react";

import { Form, FormGroup } from "reactstrap";

import ModalPost from "./ModalPostComponent.js";

import ModalPublish from "./ModalPublishComponent.js";

import PropTypes from "prop-types";

class Post extends Component {
	state = {
		post_modal: false,
	};

	togglePostModal = () => {
		this.setState({
			post_modal: !this.state.post_modal,
		});
	};

	render() {
		return (
			<div>
				<div className="max-w-xl mx-auto mt-3 px-2 py-2 flex flex-row items-center justify-between shadow-md text-gray-600 hover:text-luminous-red hover:outline focus:shadow-outline rounded-full">
					<button
						className="flex flex-row w-full items-center focus:outline-none rounded-lg"
						onClick={() => {
							this.togglePostModal();
						}}
					>
						<img
							className="rounded-full h-8 w-8 object-cover"
							src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
							alt=""
						/>
						<p className="ml-2 text-base font-medium">
							What's cooking today?
						</p>
					</button>
				</div>

				{/*
					<ModalPost
					show={this.state.post_modal}
					onClose={this.togglePostModal}
					/>
				*/}

				<ModalPublish
					show={this.state.post_modal}
					onClose={this.togglePostModal}
				/>
			</div>
		);
	}
}

export default Post;
