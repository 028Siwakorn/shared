import SearchBar from "./SearchBar";
import Stats from "./Stats";

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-purple-50 to-white">
      <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-600">
        ✨ แพลตฟอร์มแบ่งปันความรู้ฟรี
      </span>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        เรียนรู้ได้ทุกที่ <span className="text-purple-600">ทุกเวลา</span>
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mb-8">
        ค้นหาสรุปเนื้อหา บทเรียน และไฟล์เอกสารการศึกษาจากชุมชนนักเรียนทั่วประเทศ
      </p>

      <SearchBar />
      <Stats />
    </section>
  );
};

export default HeroSection;
