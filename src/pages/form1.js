import React from "react";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

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
    email: { 
		required: "Email is required" },
		maxLength: {
			value: 80,
			message: "Exceeding max characters of 80"
		  },
    password: {
		required: "Password is required",
		minLength: {
			value: 8,
			message: "Password must have at least 8 characters"
		},
		maxLength: {
			value: 80,
			message: "Exceeding max characters of 80"
		},
    }
  };

  return (
	<div className="main">
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
    	<div className="form-group">
			<label>Name</label>
			<input name="name" type="text" {...register('name', registerOptions.name) }/>
			<small className="text-danger">
				{errors?.name && errors.name.message}
			</small>
    	</div>
		<div className="form-group">
			<label>Email</label>
			<input
				type="email"
				name="email"
				{...register('email', registerOptions.email)}
			/>
			<small className="text-danger">
				{errors?.email && errors.email.message}
			</small>
		</div>
		<div className="form-group">
			<label>Password</label>
			<input
			type="password"
			name="password"
			{...register('password', registerOptions.password)}
			/>
			<small className="text-danger">
			{errors?.password && errors.password.message}
			</small>
      </div>
      <button>Submit</button>
    </form>
	</div>
  );
};
export default Form1;