export default function Footer() {
  return (
    <footer className="bg-gray-200 py-12 px-6 flex-shrink-0">
      <div className="container mx-auto flex flex-col justify-center">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} liamnaylor.com
        </p>
      </div>
    </footer>
  );
}
