const categories = ["ทั้งหมด", "ม.ต้น", "ม.ปลาย", "มหาวิทยาลัย"];

const CategoryTabs = () => {
  return (
    <div className="flex gap-2 px-6 py-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className="px-4 py-1 rounded-full border text-sm hover:bg-purple-600 hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
