const contactInfo = [
  {
    platform: "email",
    url: "mailto:muhammadgadwork@gmail.com",
  },
  {
    platform: "telegram",
    url: "https://t.me/mohgad",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/mohgad/",
  },
  {
    platform: "github",
    url: "https://github.com/GADMuhammad",
  },
];

export default function SocialMediaLinks() {
  return (
    <div className="contact animate-fade my-8 flex flex-wrap justify-center gap-14">
      {contactInfo.map((info) => (
        <a
          key={info.platform}
          href={info.url}
          target="_blank"
          className="flex flex-col justify-center gap-2"
        >
          <img
            className="h-14 w-14 self-center"
            src={`/${info.platform}.svg`}
          />
          <p className="text-3xl font-normal leading-relaxed tracking-wide text-black">
            {info.platform}
          </p>
        </a>
      ))}
    </div>
  );
}
