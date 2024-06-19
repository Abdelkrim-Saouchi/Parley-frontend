import parleyLogo from "../assets/parley.svg";
import googleLogo from "../assets/google.svg";
import githubLogo from "../assets/github.svg";
import loginImg from "../assets/login-image.jpg";

const Login = () => {
  return (
    <main className="flex min-h-dvh bg-background font-inter text-lg text-primary">
      <div className="flex w-full flex-col gap-14 px-6 py-16 md:pl-16 md:pr-8 xl:pl-32">
        <div className="mb-4 space-y-2">
          <div className="flex gap-2">
            <img src={parleyLogo} />
            <h1 className="text-5xl font-bold">Parley</h1>
          </div>
          <p>Brilliant messaging app!</p>
        </div>

        <div className="flex flex-col gap-4 lg:w-4/5">
          <h2 className="text-3xl font-bold">Log in</h2>
          <div className="flex justify-between">
            <p>Don't have an account?</p>
            <a className="cursor-pointer text-accent hover:underline">
              Create one
            </a>
          </div>
          <form className="flex flex-col gap-4">
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-secondary bg-transparent px-4 py-4 outline-accent"
              />
            </div>
            <a className="block cursor-pointer text-accent hover:underline">
              Forgot your password?
            </a>
            <button className="bg-accent py-4 font-semibold text-background transition-all hover:scale-105">
              LOG IN
            </button>
          </form>
        </div>

        <div className="space-y-3">
          <p>Or continue with:</p>
          <div className="flex gap-7">
            <img src={googleLogo} className="size-11" />
            <img src={githubLogo} className="size-11" />
          </div>
        </div>
      </div>
      <img src={loginImg} className="hidden w-1/2 object-cover md:block" />
    </main>
  );
};

export default Login;
