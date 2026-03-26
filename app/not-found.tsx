import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="text-center px-4 animate-fade-in-up">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-6">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-md">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block gradient-primary text-dark-900 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg-custom transition-all duration-350 transform hover:scale-110"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
