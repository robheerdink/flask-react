import React from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import ChannelService from '../service/channel';
import { useNavigate } from "react-router-dom"


const Form2 = () => {
	type FormInputs = {
		name: string;
		title: string;
		timezone: string;
		api: string;
	};

	const { 
		register,
		handleSubmit, 
		formState: { errors }, 
		setError, 
	} = useForm<FormInputs>();

	const serverError = ( (e: AxiosError | Error) => {
		let msg = ''
		if (axios.isAxiosError(e)) {
			if (e.response) {
				msg = " Status: " + e.response.status
			}
		} else{
			msg = " Unknown error."
		}
		setError('api', {message: 'Backend failure:' + msg});
	});

	const navigate = useNavigate();

	const onSubmit = handleSubmit(form => {
		// server sided validation
		axios.all([
			ChannelService.findByName(form.name),
			ChannelService.findByTitle(form.title)
		])
		.then(axios.spread((res1, res2) => {  
			let serverSideValid = true;

			if (res1.data.length > 0){
				serverSideValid = false
				setError('name', {message: 'Name already exists'});
			}

			if (res2.data.length > 0){
				serverSideValid = false
				setError('title', {message: 'Title already exists'});
			}

			if (serverSideValid){
				console.log("all good we can post")
				const name = form.name
				const title = form.title
				const timezone = form.timezone
				ChannelService.create({name, title, timezone})
				.then( res => {
					console.log(res)
					navigate(`/tableFPS`); 
				})
				.catch(error => { 
					console.log("we are NOT successfull")
					serverError(error);
				});
			}
		}))
		.catch(error => { 
			serverError(error);
		})
	});

	// console.log(errors);

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
			{errors.api && errors.api.message}
			</small>
      	</div>
      	<button>Submit</button>
    </form>
	</div>
  );
};
export default Form2;
