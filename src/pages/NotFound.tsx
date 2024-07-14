import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
      <p className="text-2xl md:text-3xl font-light mb-8 mt-4">Oops! Page not found.</p>
      <div className="flex items-center justify-center space-x-4">
        <img src="https://images.pexels.com/photos/7147857/pexels-photo-7147857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Quirky image" className="w-48 h-48 rounded-full shadow-lg" />
      </div>
      <p className="mt-4 text-lg text-gray-700">It looks like you're lost. Let's get you back home.</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-black   text-white rounded-lg shadow  transition  hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
