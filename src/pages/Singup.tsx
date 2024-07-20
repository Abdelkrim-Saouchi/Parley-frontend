import parleyLogo from "../assets/parley.svg";
import googleLogo from "../assets/google.svg";
import githubLogo from "../assets/github.svg";
import signupImg from "../assets/signup-image.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  fullName: string;
  password: string;
  confirmation: string;
};

const Signup = () => {
  const form = useForm<Inputs>();
  console.log(form);
  const { register, formState, getValues, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-dvh bg-background font-inter text-lg text-primary">
      <img src={signupImg} className="hidden w-1/2 object-cover md:block" />
      <div className="flex w-full flex-col gap-14 px-6 py-16 md:pl-16 md:pr-8 xl:pl-32">
        <div className="flex gap-2">
          <img src={parleyLogo} />
          <h1 className="text-5xl font-bold">Parley</h1>
        </div>

        <div className="flex flex-col gap-4 lg:w-4/5">
          <h2 className="mb-4 text-3xl font-bold">Sign up for free</h2>
          <div className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center justify-center gap-4 border border-secondary py-2 hover:bg-accent hover:text-background focus:bg-accent focus:text-background"
            >
              <img src={googleLogo} className="size-6" />
              Sign up with Google
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-4 border border-secondary py-2 hover:bg-accent hover:text-background focus:bg-accent focus:text-background"
            >
              <img src={githubLogo} className="size-6" />
              Sign up with Github
            </a>
          </div>

          <div className="mt-10 flex items-center">
            <hr className="size-0.5 w-full bg-secondary" />
            <p className="mx-6 text-nowrap text-secondary">
              Or Sign up with email
            </p>
            <hr className="size-0.5 w-full bg-secondary" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="relative flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Invalid email",
                  minLength: 4,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]/,
                })}
                className={
                  errors.email
                    ? "border border-red-600 bg-transparent px-4 py-4 outline-accent"
                    : "border border-secondary bg-transparent px-4 py-4 outline-accent"
                }
              />
              {errors.email && (
                <span className="absolute right-0 top-0 text-red-600">
                  Invalid email
                </span>
              )}
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="fullName">Full name</label>
              <input
                type="fullName"
                id="fullName"
                {...register("fullName", {
                  required: "Invalid Full name",
                  minLength: 3,
                })}
                className={
                  errors.fullName
                    ? "border border-red-600 bg-transparent px-4 py-4 outline-accent"
                    : "border border-secondary bg-transparent px-4 py-4 outline-accent"
                }
              />
              {errors.fullName && (
                <span className="absolute right-0 top-0 text-red-600">
                  Invalid full Name
                </span>
              )}
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Invalid password",
                  minLength: 5,
                })}
                className={
                  errors.password
                    ? "border border-red-600 bg-transparent px-4 py-4 outline-accent"
                    : "border border-secondary bg-transparent px-4 py-4 outline-accent"
                }
              />
              {errors.password && (
                <span className="absolute right-0 top-0 text-red-600">
                  Invalid password
                </span>
              )}
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="confirmation">Confirmation</label>
              <input
                type="password"
                id="confirmation"
                {...register("confirmation", {
                  validate: (fieldValue) => {
                    const pswd = getValues("password");

                    return pswd === fieldValue || "Password mismatch";
                  },
                })}
                className={
                  errors.confirmation
                    ? "border border-red-600 bg-transparent px-4 py-4 outline-accent"
                    : "border border-secondary bg-transparent px-4 py-4 outline-accent"
                }
              />
              {errors.confirmation && (
                <span className="absolute right-0 top-0 text-red-600">
                  Passwords mismatch
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-accent py-4 font-semibold text-background transition-all hover:scale-105"
            >
              SIGN UP
            </button>
          </form>
          <div className="mt-4 flex justify-between">
            <p>Do you have an account?</p>
            <Link
              to="/login"
              className="cursor-pointer text-accent hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
