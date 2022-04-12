import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import ChannelService from '../service/channel';


const FormChannels = () => {
	console.log("DOM CHANGED")

	type FormInputs = {
		name: string;
		title: string;
		timezone: string;
		api: string;
	};

	type CustomizedState = {
		id: number;
		name: string;
		title: string;
		timezone: string;
		initial: boolean
	} 

	const navigate = useNavigate();
	const location = useLocation();
	
	// issue this is always exectured on dome chnage
	// needs only to be executed on some page chnage event
	// better to use local storage
	const state = location.state as CustomizedState
	let { id, name, title, timezone } = state || {}
	let update = (id == undefined) ? false : true;

	const { 
		register,
		setValue,
		getValues,
		handleSubmit, 
		formState: { errors }, 
		setError, 
	} = useForm<FormInputs>();

	if (update){
		console.log('update mode, prefilling values.', state)
		setValue("name", name)
		setValue("title", title)
		setValue("timezone", timezone)
	}

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

	const onSubmit = handleSubmit(form => {
		console.log("client validation passed, checking server side validations")
		// update
		if(update){
			console.log(">> update <<")

		} else{
			console.log(">> create <<")
			// Create 
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
					ChannelService.create(form)
					.then( res => {
						navigate(`/channels`); 
					})
					.catch(error => { 
						serverError(error);
					});
				}
			}))
			.catch(error => { 
				serverError(error);
			})
		}
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

	const onSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		//event.preventDefault();
		const values = getValues();
		console.log("onSubmitClick, updating values.", values );
		setValue("name", values.name)
		setValue("title", values.title)
		setValue("timezone", values.timezone)
	}

	return (
	<div className="main">
	<p>{update ? 'Update' : 'Create'}</p>
	<form onSubmit={onSubmit}>
    	<div className="form-group">
			<label>Name</label>
			<input type="text"  {...register('name', registerOptions.name) }/>
			<small className="text-danger">
				{errors.name && errors.name.message}
			</small>
    	</div>
		<div className="form-group">
			<label>Title</label>
			<input type="text"  {...register('title', registerOptions.title)}/>
			<small className="text-danger">
			{errors.title && errors.title.message}
			</small>
      	</div>
		<div className="form-group">
			<label>Timezone</label>
			<input type="text"  {...register('timezone', registerOptions.timezone)}/>
			<small className="text-danger">
				{errors.timezone && errors.timezone.message}
			</small>
		</div>
		<div className="form-group">
			<small className="text-danger">
			{errors.api && errors.api.message}
			</small>
      	</div>
      	<button onClick={onSubmitClick} type="submit">{update ? 'Update' : 'Submit'}</button>
    </form>
	</div>
  );
};
export default FormChannels;
