import myImage from "../public/DSC_1344.jpg"

export default function Home() {
  const aboutStyle = { margin: "20px" };
  const projectStyle = { margin: "20px" };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav
      className="main-header-menu"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 40,
      }}
      >
        <section style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1
            style={{
              fontSize: "4rem",
            }}
          >
            Zach Raab{"  "}
            <span style={{ fontSize: "2rem" }}>Full-Stack Developer</span>
          </h1>
            <img
              style={{ objectPosition: "top center", objectFit: "cover", height: "300px", width: "300px" }}
              src={myImage.src} alt="Headshot of Zach Raab."
            ></img>
        </section>
        <section
          style={{
            display: "flex",
            fontSize: "2rem",
          }}
        >
        <div>
          <a href="https://www.linkedin.com/in/zachary-raab-61578248/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/zachraab">GitHub</a>
        </div>
        </section>
      </nav>
      <section style={aboutStyle}>
        <h2>About Me</h2>
        <p>
        A versatile full-stack developer with a background spanning entertainment, and audio engineering. Proficient in cultivating creativity and resolving complex challenges, I excel in collaborative team settings. Committed to continuous learning and adept at adopting emerging technologies. My upbringing amidst the natural splendor of Rocky Mountain National Park instilled a deep appreciation for the outdoors. 
        </p>
      </section>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  );
}
