import PictureAndInfo from "../components/PictureAndInfo";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import f2 from "../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import f3 from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import f4 from "../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";

const VisitProfile = () => {
  const profiles = [
    {
      imgUrl: f1,
      fullName: "John Doe",
      location: "Chicago, USA",
    },
    {
      imgUrl: f2,
      fullName: "Cloe Smith",
      location: "Las Vigas, USA",
    },
    {
      imgUrl: f3,
      fullName: "Mohammedov",
      location: "Chishnia, Russia",
    },
    {
      imgUrl: f4,
      fullName: "Taylor Swift",
      location: "London, England",
    },
  ];

  return (
    <main className="text-inter flex min-h-dvh flex-col bg-background px-4 py-2 text-lg text-primary md:ml-[128px] md:pl-24 md:pr-16">
      <button className="mb-8 hidden self-start md:block">
        <span className="icon-[line-md--arrow-left] size-12"></span>
      </button>
      <div className="flex flex-col gap-16 md:pr-16 lg:w-[600px]">
        <PictureAndInfo />
        <div className="flex flex-col flex-wrap gap-4 self-center md:flex-row md:gap-16 md:self-end">
          <button className="rounded-xl bg-accent px-8 py-2 font-semibold text-background md:py-4">
            Message
          </button>
          <button className="rounded-xl bg-accent px-8 py-2 font-semibold text-background md:py-4">
            Add friend
          </button>
        </div>
      </div>

      <button className="mt-16 self-start px-4 md:hidden">
        <span className="icon-[line-md--arrow-left] size-12"></span>
      </button>

      <div className="my-8 hidden self-end lg:block">
        <h3 className="mb-8 text-xl font-bold">Similar Profiles</h3>
        <div className="space-y-4">
          {profiles.map((profile, index) => {
            return (
              <div key={index} className="flex items-center gap-6">
                <img src={profile.imgUrl} className="size-16 rounded-full" />
                <div className="space-y-1">
                  <h4 className="font-bold">{profile.fullName}</h4>
                  <p className="text-secondary/85">{profile.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default VisitProfile;
