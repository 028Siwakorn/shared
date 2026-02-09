const ContentCard = ({ image, title, likes, views }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex gap-4 text-sm">
          ❤️ {likes}
          👁 {views}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
