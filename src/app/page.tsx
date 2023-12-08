import Link from "next/link";
import { SVGProps } from "react";
import GameComponent from "../_components/gamelogic";

export default function Main() {
  return (
    <>
      <section className="w-full h-screen p-6 md:p-12 bg-gray-900 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">I Have Never</h1>
          <GameComponent />
      </section>

       <footer className="fixed bottom-1 w-full p-6 md:p-12 bg-black text-center text-white mt-12">
        <div className="flex flex-row items-center justify-center">
          <Link className="mb-4 md:mb-0 md:mr-4 flex flex-row gap-4 items-center" href="https://github.com/uhmarlon/I-have-never">
            <GithubIcon className="w-6 h-6" />
              <p className="text-sm hover:underline">© {new Date().getFullYear()} I Have Never. All rights reserved.</p>
          </Link>
        </div>
      </footer>
    </>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
