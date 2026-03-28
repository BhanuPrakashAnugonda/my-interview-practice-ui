"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function FirstPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-96"
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          User Form
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Name
          </label>

          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded px-3 py-2"
            placeholder="Name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Email
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Password
          </label>

          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required"
              }
            })}
            className="w-full border rounded px-3 py-2"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

      </form>
    </div>
  );
}