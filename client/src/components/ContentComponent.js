import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Form,
	FormGroup,
	Button,
	CardTitle,
	CardText,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
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
import { FiShare, FiStar, FiSave, FiBookmark, FiHeart } from "react-icons/fi";

import { recipe, getRecipes } from "../actions/recipeActions";
import { clearErrors } from "../actions/errorActions";

import PostComponent from "./PostComponent";
import HomeMenuComponent from "./HomeMenuComponent";
import TimelineComponent from "./TimelineComponent";
import TrendingComponent from "./TrendingComponent";

import PropTypes from "prop-types";

class Content extends Component {
	state = {
		recipeState: [],
	};
	componentDidMount() {}

	componentDidUpdate(prevProps) {}

	/*togglePublishModal = () => {
		this.setState({
			modal: !this.state.modal,
		});

		const body = document.querySelector("body");
		const modal = document.querySelector(".modal");
		modal.classList.toggle("opacity-0");
		modal.classList.toggle("pointer-events-none");
		modal.classList.toggle("invisible");

		body.classList.toggle("modal-active");
	};*/

	render() {
		return (
			<div className="content">
				<Container fluid={true}>
					<Row>
						<Col
							lg="3"
							md="12"
							sm="0"
							xs="0"
							className="divleft static"
						>
							<HomeMenuComponent />
						</Col>

						<Col lg="6" md="12" sm="12" xs="12" className="">
							{/*className:border-right*/}

							<PostComponent />
							{/*Create Post*/}

							<TimelineComponent />
							{/*Timeline*/}
						</Col>

						<Col lg="3" md="12" sm="0" xs="0">
							<div className="divright">
								<TrendingComponent />
							</div>
						</Col>
					</Row>
				</Container>

				{/*Recipe Modal*/}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	recipe_item: state.recipe,
	isAuthenticated: state.auth.isAuthenticated,
	isPublished: state.recipe.isPublished,
	error: state.error,
});

export default connect(mapStateToProps, { recipe, clearErrors, getRecipes })(
	Content
);
