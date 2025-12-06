import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";

//----------------------
// Zod Schema
//---------------------
const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Form Data:", data);

    // TODO: call login API with Redux Toolkit
    // await dispatch(loginUser(data));
    navigate("/login");
  };

  return (
    <div className="max-w-full md:max-w-lg mx-auto bg-white rounded-2xl p-5 md:p-10 shadow-lg flex flex-col items-center gap-6">
      {/* Logo */}
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Logo />
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="font-extrabold text-2xl text-gray-900">
          Create your account
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Join MailMonkey AI in just a minute
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full text-sm"
      >
        {/* FULL NAME */}
        <div className="flex flex-col gap-1">
          <label htmlFor="fullname" className="text-gray-700 font-medium">
            Full Name
          </label>

          <input
            type="fullName"
            id="fullName"
            placeholder="John Doe"
            className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("fullName")}
          />

          {touchedFields.fullName && errors.fullName && (
            <p className="text-red-600 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("email")}
          />

          {touchedFields.email && errors.email && (
            <p className="text-red-600 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>

          <div className="rounded-xl relative flex border border-gray-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="border-none outline-none p-3 w-full"
              {...register("password")}
            />

            {/* Toggle Password */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOffIcon /> : <Eye />}
            </button>
          </div>

          {touchedFields.password && errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* CONFIRN PASSWORD */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Confirm Password
          </label>

          <div className="rounded-xl relative flex border border-gray-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="border-none outline-none p-3 w-full"
              {...register("password")}
            />

            {/* Toggle Password */}
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOffIcon /> : <Eye />}
            </button>
          </div>

          {touchedFields.password && errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          label="Create Account"
          loading={isSubmitting}
          customClass="w-full py-3 font-bold"
          variant="primary"
          type="submit"
        />
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center w-full gap-3 my-2">
        <div className="border-t border-gray-300 w-full"></div>
        <span className="text-xs text-gray-500 w-full text-center">
          Or continue with
        </span>
        <div className="border-t border-gray-300 w-full"></div>
      </div>

      {/* Google Login */}
      <div className="w-full">
        <Button
          label="Continue with Google"
          variant="outline"
          icon={<img src="/icons/google.png" className="w-5 h-5" />}
          iconPosition="left"
          customClass="w-full p-3 font-medium"
        />
      </div>

      {/* Footer */}
      <p className="text-gray-600 text-sm">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 font-semibold cursor-pointer"
        >
          {" "}
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
