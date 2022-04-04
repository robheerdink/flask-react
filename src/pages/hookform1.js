import React from "react";
import { useForm } from "react-hook-form";

//import "./styles.css";

export default function Form1() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <div className="main">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label>First name</label>
            <input
                type="text"
                {...register("First name", { required: true, maxLength: 80 })}
            />
        </div>
        <div className="form-group">
            <label>Last name</label>
            <input
                type="text"
                {...register("Last name", { required: true, maxLength: 100 })}
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                type="text"
                {...register("Email", {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
            />
        </div>
        <div className="form-group">
            <label>Mobile number</label>
            <input
                type="tel"
                {...register("Mobile number", {
                required: true,
                maxLength: 11,
                minLength: 8
                })}
            />
        </div>
        <div className="form-group">     
            <label>Title</label>
            <select name="Title" {...register("title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
        </div>
        <div className="form-group">
            <label>Are you a developer?</label>
            <input
                type="radio"
                value="Yes"
                {...register("developer", { required: true })}
            />
            <input
                type="radio"
                value="No"
                {...register("developer", { required: true })}
            />
        </div>
        <div className="form-group">
            <input type="submit" />
        </div>
        </form>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Form />, rootElement);
