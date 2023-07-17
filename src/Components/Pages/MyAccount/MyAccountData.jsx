import { Link } from "react-router-dom";

const MyAccountData = () => {
  return (
    <div className="mx-auto grid md:grid-cols-2 md:gap-28 gap-12 my-20 w-11/12">
      <div>
        <h1 className="text-3xl py-8 text-center font-medium">LOGIN</h1>
        <form action="">
          <div className="md:flex block  items-center justify-between">
            <p className="text-xl text-black">Email address</p>
            <input
              type="text"
              placeholder="Ente your email"
              className="my-6 md:w-3/4 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
          </div>
          <div className="md:flex block  items-center justify-between">
            <p className="text-xl text-black">Password</p>
            <input
              type="password"
              placeholder="Ente your password"
              className="my-6 md:w-3/4 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
          </div>
          <div className="mx-auto text-center">
            <button className="bg-[#73841B] my-4 px-8 py-2 text-white text-xl">
              LOG IN
            </button>
            <div className="flex mx-auto md:w-2/3 justify-around">
              <Link className="hover:text-[#73841B]" to="/shop">
                Return to Store
              </Link>
              <Link className="hover:text-[#73841B]" to="/shop">
                Forgot your password
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-3xl py-8 text-center font-medium">REGISTER</h1>
        <form action="">
          <div className="md:flex block  items-center justify-between">
            <p className="text-xl text-black">Email address</p>
            <input
              type="text"
              placeholder="Ente your email"
              className="my-6 md:w-3/4 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
          </div>
          <div className="md:flex block  items-center justify-between">
            <p className="text-xl text-black">Password</p>
            <input
              type="password"
              placeholder="Ente your password"
              className="my-6 md:w-3/4 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
          </div>
          <div className="mx-auto text-center">
            <button className="bg-[#73841B] my-4 px-8 py-2 text-white text-xl">
              REGISTER
            </button>
            <div className="flex mx-auto md:w-2/3 justify-around">
              <Link className="hover:text-[#73841B]" to="/shop">
                Return to Store
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccountData;
