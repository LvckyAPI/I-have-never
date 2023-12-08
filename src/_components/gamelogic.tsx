"use client";
import React, { useState, useEffect, useCallback } from "react";
import * as questions from "../data/questions.json";

type QuestionsJsonType = {
  [key: string]: string[];
};
const questionsJson: QuestionsJsonType = questions;

const GameComponent: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);
  const categoryKeys = Object.keys(questionsJson);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);

  const getRandomQuestionFromCategory = useCallback(
    (categoryKey: string): string => {
      const category = questionsJson[categoryKey];
      if (!Array.isArray(category) || category.length === 0) {
        console.error(`Kategorie ${categoryKey} ist ungültig oder leer.`);
        return "";
      }

      let potentialQuestions = category.filter(
        (q) => !recentQuestions.includes(q)
      );
      if (potentialQuestions.length === 0) {
        potentialQuestions = category;
      }
      return potentialQuestions[
        Math.floor(Math.random() * potentialQuestions.length)
      ];
    },
    [recentQuestions]
  );

  const nextQuestion = useCallback(() => {
    let nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
    let newQuestion = getRandomQuestionFromCategory(
      categoryKeys[nextCategoryIndex]
    );

    while (!newQuestion && nextCategoryIndex !== currentCategoryIndex) {
      nextCategoryIndex = (nextCategoryIndex + 1) % categoryKeys.length;
      newQuestion = getRandomQuestionFromCategory(
        categoryKeys[nextCategoryIndex]
      );
    }

    if (newQuestion) {
      setCurrentQuestion(newQuestion);
      setRecentQuestions((prev) => [...prev, newQuestion].slice(-5));
      setCurrentCategoryIndex(nextCategoryIndex);
    }
  }, [currentCategoryIndex, categoryKeys, getRandomQuestionFromCategory]);

  const getGradientForCategory = (category: string): string => {
    switch (category) {
      case "Extrem":
        return "bg-gradient-to-b from-[#BF9F00] to-[#606060]";
      case "Normal":
        return "bg-gradient-to-b from-[#A73200] to-[#6C006C]";
      case "Beziehung":
        return "bg-gradient-to-b from-[#006600] to-[#CC3C00]";
      case "Lebenserfahrungen":
        return "bg-gradient-to-b from-[#CC0C6C] to-[#3D006A]";
      case "Sexual":
        return "bg-gradient-to-b from-[#BF4500] to-[#7A1B9E]";
      case "Trinkfragen":
        return "bg-gradient-to-b from-[#007764] to-[#E6481A]";
      case "Peinliche Momente":
        return "bg-gradient-to-b from-[#CC3200] to-[#740074]";
      default:
        return "bg-gradient-to-b from-[#004D4D] to-[#BF7D00]";
    }
  };

  const currentGradient = getGradientForCategory(
    categoryKeys[currentCategoryIndex]
  );

  useEffect(() => {
    nextQuestion();
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className={`max-w-2xl ${currentGradient} text-white p-8 rounded-xl shadow-lg flex flex-col`}
        style={{ minHeight: "350px" }}
      >
        <div
          className="text-2xl md:text-4xl"
          style={{ height: "300px", overflow: "auto" }}
        >
          {currentQuestion || "Lade Frage..."}
        </div>
        <button
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-slate-200 mt-4 sm:self-end self-center sm:w-fit w-full"
          onClick={nextQuestion}
        >
          Nächste Frage
        </button>
      </div>
    </div>
  );
};

export default GameComponent;
