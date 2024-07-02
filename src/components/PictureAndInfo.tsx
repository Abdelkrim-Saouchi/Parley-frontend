import profile from "../assets/profile.jpg";
const PictureAndInfo = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:justify-start md:gap-32">
      <div className="relative">
        <img src={profile} className="size-48 rounded-full" />
        <button className="absolute bottom-0 right-0">
          <span className="icon-[bxs--image-add] size-8"></span>
        </button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Krimothazine</h2>
        <p className="text-center text-secondary/80 md:text-start">
          Algiers, Algeria
        </p>
      </div>
    </div>
  );
};

export default PictureAndInfo;
