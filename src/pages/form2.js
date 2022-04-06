import React from "react";
import { useForm } from "react-hook-form";
import ChannelService from '../service/channel';

const Form2 = () => {

	const { 
		register,
		// getValues,
		handleSubmit, 
		formState: { errors }, 
		//setError, 
	} = useForm();

	const onSubmit = data => {
		console.log("onSubmit");
		console.log(data);

		ChannelService.findByTitle(data.title)
		.then(data => {
			console.log(data.request.response)
			const obj = JSON.parse(data.request.response).length;
			console.log(obj.length)
			//https://stackoverflow.com/questions/64469861/react-hook-form-handling-server-side-errors-in-handlesubmit

		})
		.catch((e) => {
			console.log("findByTitle fail:")
			const errors = e.response.data;
			console.log(errors)

			Object.keys(errors).forEach((field) => {
				const messages = errors[field];
				console.log(messages)
			});
		});
	}

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
		}
	};

  return (
	<div className="main">

	<form onSubmit={handleSubmit(onSubmit)}>
    	<div className="form-group">
			<label>Name</label>
			<input name="name" type="text" {...register('name', registerOptions.name) }/>
			<small className="text-danger">
				{errors?.name && errors.name.message}
			</small>
    	</div>
		<div className="form-group">
			<label>Title</label>
			<input name="title" type="text" {...register('title', registerOptions.title)}/>
			<small className="text-danger">
			{errors?.title && errors.title.message}
			</small>
      	</div>
		<div className="form-group">
			<label>Timezone</label>
			<input name="timezone" type="text" {...register('timezone', registerOptions.timezone)}/>
			<small className="text-danger">
				{errors?.timezone && errors.timezone.message}
			</small>
		</div>
      	<button>Submit</button>
    </form>
	</div>
  );
};
export default Form2;
