import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";

// ---------------------
// Zod Schema
// --------------------
const forgotSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ForgotFormData) => {
    console.log("Forgot Password Email:", data);

    // TODO: Call backend API for sending reset password email
    // await dispatch(sendResetEmail(data.email));

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
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
            Forgot Password?
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email address and we’ll send you a reset link.
          </p>
        </div>

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

          {/* BUTTON */}
          <Button
            label="Send Reset Link"
            loading={isSubmitting}
            customClass="w-full py-3 font-bold"
            variant="primary"
            type="submit"
          />
        </form>

        {/* Back to login */}
        <div className="text-sm text-gray-600 mt-2">
          Remember your password?
          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-1 cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
