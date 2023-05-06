import React from "react";
import { useForm } from "react-hook-form";

export default function UserInfoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName", { required: true, minLength: 5 })}
        />
        {errors.firstName && <span>This field is required and must have at least 5 characters</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register("lastName")} />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          {...register("phone", {
            required: true,
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
