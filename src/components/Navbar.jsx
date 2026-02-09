import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-purple-700 text-white px-6 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2 font-semibold text-lg hover:opacity-80"
      >
        📘 EduShare
      </Link>

      <input
        type="text"
        placeholder="ค้นหาบทความ, หัวข้อ, แท็ก..."
        className="hidden md:block w-96 px-4 py-2 rounded-full text-sm text-gray-700 focus:outline-none"
      />

      <Link to="/login">
        <button className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          เข้าสู่ระบบ
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
