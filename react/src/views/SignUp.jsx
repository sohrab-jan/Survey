import { Link } from "react-router-dom";
export default function SignUp() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Signup for free
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Login with your account
                    </Link>
                </p>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="full-name" className="sr-only">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full-name"
                                    name="name"
                                    type="text"
                                    autoComplete="full-name"
                                    required
                                    placeholder="Full Name"
                                    className=" relative block w-full rounded-md border-0 py-1.5 text-gray-900
                                     ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                     focus:ring-indigo-600 sm:text-sm sm:leading-6  shadow-sm ring-1"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email Address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                     focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                     ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password-confirmation"
                                className="sr-only"
                            >
                                Password Confirmation
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password-confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    required
                                    placeholder="Password Confirmation"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                     ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                     focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div></div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 
                                py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                                 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                                 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
