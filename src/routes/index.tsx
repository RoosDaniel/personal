import { A } from "solid-start";
import { LinkedIn, GitHub, Email } from "~/icons";

export default function Home() {
  return (
    <main class="flex flex-col items-center justify-between h-full">
      <h1 class="text-white text-center text-5xl">Daniel Roos</h1>
      <footer class="flex gap-8">
        <a href="https://www.linkedin.com/in/daniel-roos-a84b99138/">
          <LinkedIn />
        </a>
        <a href="https://github.com/RoosDaniel/">
          <GitHub />
        </a>
        <a href="mailto:96danielroos@gmail.com">
          <Email />
        </a>
      </footer>
    </main>
  );
}
