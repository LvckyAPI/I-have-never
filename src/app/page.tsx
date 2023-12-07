import Link from "next/link";
import { SVGProps } from "react";
import GameComponent from "../_components/gamelogic";

export default function Main() {
  return (
    <>
      <section className="w-full h-screen p-6 md:p-12 bg-gray-900 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">I Have Never</h1>

          <GameComponent />
        </div>
      </section>
      {/* <footer className=" w-5 p-6 md:p-12 bg-black text-center text-white mt-12">
        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row">
          <Link href="#">
            <span className="sr-only">I Have Never Logo</span>
          </Link>
          <Link className="mb-4 md:mb-0 md:mr-4" href="#">
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">Github Link</span>
          </Link>
          <p className="text-sm">© 2023 I Have Never. All rights reserved.</p>
        </div>
      </footer> */}
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

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
