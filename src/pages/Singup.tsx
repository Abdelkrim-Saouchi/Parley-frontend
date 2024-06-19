import parleyLogo from "../assets/parley.svg";
import googleLogo from "../assets/google.svg";
import githubLogo from "../assets/github.svg";
import signupImg from "../assets/signup-image.jpg";

const Signup = () => {
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

          <form className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-secondary bg-transparent px-4 py-4 outline-accent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullName">Full name</label>
              <input
                type="fullName"
                id="fullName"
                name="fullName"
                className="border border-secondary bg-transparent px-4 py-4 outline-accent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-secondary bg-transparent px-4 py-4 outline-accent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmation">Confirmation</label>
              <input
                type="confirmation"
                id="confirmation"
                name="confirmation"
                className="border border-secondary bg-transparent px-4 py-4 outline-accent"
              />
            </div>
            <button className="bg-accent py-4 font-semibold text-background transition-all hover:scale-105">
              SIGN UP
            </button>
          </form>
          <div className="mt-4 flex justify-between">
            <p>Do you have an account?</p>
            <a className="cursor-pointer text-accent hover:underline">Log in</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
