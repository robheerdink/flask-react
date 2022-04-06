import React from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import ChannelService from '../service/channel';
import { Server } from "http";

const Form2 = () => {

	type FormInputs = {
		name: string;
		title: string;
		timezone: string;
		backend: string;
	};

	const { 
		register,
		handleSubmit, 
		formState: { errors }, 
		setError, 
	} = useForm<FormInputs>();

	const serverError = ((e: AxiosError) => {
		let msg = ''
		if (e.response) {
			msg = " Status: " + e.response.status
		}
		setError('backend', {type: "server", message: 'Oh no backend is not working.' + msg});
	});

	const handleError = ((e: AxiosError<any, any> ) => {
		if (axios.isAxiosError(e)) {
			serverError(e)
		} else{
			console.log(e)
			setError('backend', {type: "server", message: 'Unknown error'});
		}
	});

	const onSubmit = handleSubmit(data => {
		console.log(data)

		ChannelService.findByName(data.name)
		.then(data => {
			if (JSON.parse(data.request.response).length > 0){
				setError('name', {type: "server", message: 'Name already exists'});
			}
		})
		.catch((e) => handleError(e));

		ChannelService.findByTitle(data.title)
		.then(data => {
			if (JSON.parse(data.request.response).length > 0){
				setError('title', {type: "server", message: 'Title already exists'});
			}
		})
		.catch((e) => handleError(e));
	});

	console.log(errors);

	const registerOptions = {
		name: { 
			required: "Name is required", 
			minLength: {
				value: 2,
				message: "Name must have at least 2 characters"
			},
			maxLength: {
				value: 80,
				message: "Exceeding max characters of 80"
			},
		},
		title: { 
			required: "Title is required" },
			minLength: {
				value: 2,
				message: "Title must have at least 2 characters"
			},
			maxLength: {
				value: 80,
				message: "Exceeding max characters of 80"
			},
		timezone: {
			required: "Timezone is required",
			minLength: {
				value: 2,
				message: "Timezone must have at least 8 characters"
			},
			maxLength: {
				value: 80,
				message: "Exceeding max characters of 80"
			},
		},
	};

  return (
	<div className="main">

	<form onSubmit={onSubmit}>
    	<div className="form-group">
			<label>Name</label>
			<input type="text" {...register('name', registerOptions.name) }/>
			<small className="text-danger">
				{errors.name && errors.name.message}
			</small>
    	</div>
		<div className="form-group">
			<label>Title</label>
			<input type="text" {...register('title', registerOptions.title)}/>
			<small className="text-danger">
			{errors.title && errors.title.message}
			</small>
      	</div>
		<div className="form-group">
			<label>Timezone</label>
			<input type="text" {...register('timezone', registerOptions.timezone)}/>
			<small className="text-danger">
				{errors.timezone && errors.timezone.message}
			</small>
		</div>
		<div className="form-group">
			<small className="text-danger">
			{errors.backend && errors.backend.message}
			</small>
      	</div>
      	<button>Submit</button>
    </form>
	</div>
  );
};
export default Form2;
