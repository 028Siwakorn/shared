const SearchBar = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex w-full max-w-xl bg-white rounded-full shadow">
        <input
          type="text"
          placeholder="ค้นหาความรู้ เช่น ฟิสิกส์, ม.ปลาย, คณิตศาสตร์..."
          className="flex-1 px-6 py-3 rounded-l-full focus:outline-none"
        />
        <button className="bg-purple-600 text-white px-6 rounded-full">
          ค้นหา
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
