import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "I Have Never / Ich habe noch nie - Das Spannende Partyspiel | Fun & Challenges in Deutsch",
  description:
    "Entdecke / 'ich habe noch nie', das ultimative Partyspiel für unvergessliche Abende. Perfekt für Freunde und Familie, in Deutsch. Spaß, Herausforderungen und unerwartete Wendungen garantiert!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import * as questions from "../data/questions.json";

interface QuestionsJsonType {
  [key: string]: string[];
}
const questionsJson: QuestionsJsonType = questions;
