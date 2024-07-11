export default function AdminLogin({ onNext }) {
  const handleNext = () => {
    onNext();
  };

  return (
    <div className="px-6 bg-white rounded-xl p-4 h-[90vh]">
      <h1 className="text-xl text-[#444444] text-center font-bold">Login</h1>
      <form className="space-y-4 md:space-y-6 max-w-lg mx-auto" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
            required=""
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center "
          onClick={handleNext}
        >
          Login
        </button>
        <p className="text-sm font-light text-gray-500 px-2">
          Don't have account ?{" "}
          <a href="#" className="font-medium text-primary-600 hover:underline ">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}
