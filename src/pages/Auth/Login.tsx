/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import { useToast } from "../../hooks/useToast";
import { getProfileInfo, loginUser } from "../../services/authService";
import { setUser } from "../../store/auth.slice";
import { useAppDispatch } from "../../store/hook";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data);

      // Fetch profile after successful login
      const profile = await getProfileInfo();
      dispatch(setUser(profile));

      toast.show("success", "Logged in successfully");
      navigate("/dashboard");
    } catch (error: any) {
      toast.show("error", error?.response?.data?.message || "Failed to login");
      console.error(error);
    }
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
        <h1 className="font-extrabold text-2xl text-gray-900">Welcome back</h1>
        <p className="text-gray-500 text-sm mt-1">
          Sign in to your account to continue
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full text-sm"
      >
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
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <Link to="/forgot-password" className="text-blue-600 text-sm">
              Forgot password?
            </Link>
          </div>

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
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 3l18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.58 10.58A2 2 0 0 0 12 14a2 2 0 0 0 1.42-.58"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>

          {touchedFields.password && errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          label="Sign In"
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
        Don't have an account?
        <Link
          to="/register"
          className="text-blue-600 font-semibold cursor-pointer"
        >
          {" "}
          Sign up
        </Link>
      </p>
    </div>
  );
}
