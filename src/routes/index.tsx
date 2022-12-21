import { A } from "solid-start";
import LinkedIn from "~/icons/LinkedIn";

export default function Home() {
  return (
    <main class="flex flex-col items-center justify-between h-full">
      <h1 class="text-white text-center text-5xl">Daniel Roos</h1>
      <footer>
        <A href="https://www.linkedin.com/in/daniel-roos-a84b99138/">
          <LinkedIn />
        </A>
      </footer>
    </main>
  );
}
