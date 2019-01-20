import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {createPost} from '../actions';

const Form = styled.form`
	a: margin-left: 5px;
`;

class PostsNew extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	renderTextField(field) {
		const {meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className='form-control' type='text' {...field.input} />
				<div className='text-help'>
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values, () => this.props.history.push('/'));
	}

	render() {
		const {handleSubmit} = this.props;

		return (
			<Form onSubmit={handleSubmit(this.onSubmit)}>
				<Field label='Title' name='title' component={this.renderTextField}/>
				<Field label='Categories' name='categories' component={this.renderTextField}/>
				<Field label='Content' name='content' component={this.renderTextField}/>
				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</Form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title.';
	}
	if (!values.categories) {
		errors.categories = 'Enter some categories.';
	}
	if (!values.content) {
		errors.content = 'Enter some content.';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	validate
})(
	connect(null, {createPost})(PostsNew)
)
;
