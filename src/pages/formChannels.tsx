import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import ChannelService from '../service/channel';


const FormChannels = () => {
	type ChannelInput = {
		id: string;
		name: string;
		title: string;
		timezone: string;
		api: string;
	};

	const location = useLocation();
	const navigate = useNavigate();
	
	const state = location.state as ChannelInput
	let { id, name, title, timezone } = state || {}
	let update = (id == undefined) ? false : true;
	

	const { 
		register,
		handleSubmit,
		reset, 
		formState: { errors }, 
		setError, 
	} = useForm<ChannelInput>();

	useEffect(() => {
		console.log(id, name, title, timezone)
		reset({
            name: name,
            title: title,
			timezone: timezone
        })
    }, []);

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

	const onReset = () => {
		console.log("on reset click")
		reset({
            name: name,
            title: title,
			timezone: timezone
        })
	}

	const onSubmit = (data: ChannelInput) => {
		console.log("client validation passed, checking server side validation", data)
		
		// update
		if(update){
			console.log("check update")
			axios.all([
				ChannelService.findByName(data.name),
				ChannelService.findByTitle(data.title)
			]).then(axios.spread((res1, res2) => {  
				let serverSideValid = true;
				
				// check if name already exists in any other row 
				if (res1.data.length > 0){
					for (let row of res1.data) {
						if (row.id != id){
							serverSideValid = false
							setError('name', {message: 'Name already exists'});
						}
					}
				}
				// check if title already exists in any other row
				if (res2.data.length > 0){
					for (let row of res2.data) {
						if (row.id != id){
							serverSideValid = false
							setError('title', {message: 'Title already exists'});
						}
					}
				}
				if (serverSideValid){
					console.log("updating")
					ChannelService.update(id, data)
					.then( res => {
						navigate(`/channels`); 
					})
					.catch(error => { 
						serverError(error);
					});
				}
			}));

		} else{
			console.log("check create")
			axios.all([
				ChannelService.findByName(data.name),
				ChannelService.findByTitle(data.title)
			])
			.then(axios.spread((res1, res2) => {  
				let serverSideValid = true;
				
				// check if name already exists
				if (res1.data.length > 0){
					serverSideValid = false
					setError('name', {message: 'Name already exists'});
				}
				// check if name already exists
				if (res2.data.length > 0){
					serverSideValid = false
					setError('title', {message: 'Title already exists'});
				}
				if (serverSideValid){
					console.log("creating")
					ChannelService.create(data)
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
	};

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
			required: "Title is required",
			minLength: {
				value: 2,
				message: "Title must have at least 2 characters"
			},
			maxLength: {
				value: 80,
				message: "Exceeding max characters of 80"
			},
		},
		timezone: {
			required: "Timezone is required",
			minLength: {
				value: 2,
				message: "Timezone must have at least 2 characters"
			},
			maxLength: {
				value: 80,
				message: "Exceeding max characters of 80"
			},
		},
	};

	// form changes between create and update
	let text = <p>Create Channel</p>;
	let btns = <button type="submit">Submit</button>;
	if (update){
		text = <p>Update Channel</p>;
		btns = <div>
			<button type="submit">Change</button>
			<button onClick={onReset}>Reset</button></div>;
	} 

	return (
	<div className="main">
	{text}
	<form onSubmit={handleSubmit(onSubmit)}>
    	<div className="form-group">
			<label>Name</label>
			<input type="text"  {...register('name', registerOptions.name)}/>
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
      	{btns}
    </form>
	</div>
  );
};
export default FormChannels;
