import SocialMediaLinks from "./SocialMediaLinks";

const paragraphStyle =
  "font-normal text-3xl tracking-wide leading-relaxed text-black";

const paragraphsContent = [
  "Hello, I am Muhammad Gad. A software developer who has developed a responsive web application using React, achieving loading times under 2 seconds and improving user experience for over 1,000 active daily users while enhancing overall platform performance.",
  "Armed with a skill set encompassing HTML5, SASS, OOP, React.js, and Git, I specialize in delivering not just code but tangible business value.",
  "Optimized User Experiences: Leveraging React.js, I've crafted engaging interfaces that translate into increased user retention and satisfaction.",
  "Efficiency through SASS: Implemented SASS to streamline CSS development, significantly reducing maintenance costs and boosting development speed.",
  "Strategic Problem Solver: Approach problem-solving like a strategic investment, identifying opportunities for efficiency gains and improved workflows.",
  "➙ Languages: JavaScript, Python",
  "➙ Web Technologies: HTML, CSS, SASS, Styled Components and my preferred Tailwind-CSS.",
  "➙ Frameworks: React",
  "➙ Version Control: Git, GitHub",
  `➙ Productivity Systems: Notion, Microsoft 365, Evernote, Pomodoro technique.`,
  "Successfully implemented React projects, blending functionality with elegant design.",
  "💼 Open to Opportunities, Passionate about contributing to innovative projects, I am open to new opportunities that align with my skills and aspirations. Let's connect and explore possibilities!",
  "Excited about the intersection of technology and creativity, I'm on a mission to make the web a better place. Let's connect and explore how we can optimize your web development investments!",
];

function About() {
  return (
    <section>
      <div className="my-14 flex animate-up gap-10">
        <main className="flex flex-col gap-2">
          <h3 className="mb-6 font-inter text-6xl font-semibold">Our Story</h3>

          {paragraphsContent.map((paragraph) => (
            <p
              key={paragraph}
              className={`${paragraphStyle} ${!paragraph.includes("➙") && "mb-4"}`}
            >
              {paragraph}
            </p>
          ))}
          <SocialMediaLinks />
        </main>
        <img
          src="/muhammad gad.jpg"
          className="h-1/3 w-1/4 rounded-xl shadow-image max-lg:hidden"
          alt="image of mine - Muhammad Gad"
        />
      </div>
    </section>
  );
}

export default About;
