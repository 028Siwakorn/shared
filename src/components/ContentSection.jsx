import ContentCard from "./ContentCard";

const mockData = [
  {
    id: 1,
    title: "เทคนิคจำศัพท์ภาษาอังกฤษ 1,000 คำ ใน 30 วัน",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    likes: 567,
    views: 8932,
  },
  {
    id: 2,
    title: "แคลคูลัส 101: พื้นฐานที่เด็กใหม่ต้องรู้",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    likes: 445,
    views: 6789,
  },
  {
    id: 2,
    title: "แคลคูลัส 101: พื้นฐานที่เด็กใหม่ต้องรู้",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    likes: 445,
    views: 6789,
  },
];

const ContentSection = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="font-semibold mb-6">🔥 บทความยอดนิยม</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {mockData.map((item) => (
          <ContentCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
