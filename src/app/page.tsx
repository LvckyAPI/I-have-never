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
    </>
  );
}
