import { useState } from "react";
import { Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import fallbackImage from "../assets/hero.png";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Mascot from "../components/Mascot";

const AGE_GROUPS = [
  { key: "younger", label: "Ages 7-10", emoji: "\uD83C\uDF1F" },
  { key: "older", label: "Ages 11-16", emoji: "\uD83D\uDE80" },
] as const;

function KidsZone() {
  const [ageGroup, setAgeGroup] = useState<"younger" | "older">("younger");

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <div className="flex items-center justify-between bg-gradient-to-br from-kidney-50 via-[#ffe8e0] to-[#fff5e6] rounded-3xl py-10 px-12 mb-8 gap-8 max-md:flex-col max-md:text-center max-md:py-8 max-md:px-6">
        <div>
          <h1 className="text-4xl text-foreground mb-2 max-md:text-3xl">
            Kids Zone <span className="text-3xl">&#10024;</span>
          </h1>
          <p className="text-warm-muted text-lg leading-relaxed max-w-[420px] max-md:max-w-full">
            Learn all about your kidneys with Rinni! Choose your age group and
            start exploring fun interactive lessons.
          </p>
        </div>
        <div className="shrink-0">
          <Mascot pose="idle" size={140} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-10 max-md:flex-wrap">
        <span className="text-base font-semibold text-warm-muted mr-1">I am:</span>
        {AGE_GROUPS.map((group) => (
          <button
            key={group.key}
            className={cn(
              "flex items-center gap-1.5 px-6 py-2.5 rounded-full border-2 font-semibold text-[0.95rem] cursor-pointer transition-all duration-200",
              ageGroup === group.key
                ? "bg-primary text-white border-primary"
                : "bg-white text-warm-muted border-border hover:border-primary hover:bg-kidney-50"
            )}
            onClick={() => setAgeGroup(group.key)}
          >
            <span className="text-xl">{group.emoji}</span>
            {group.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mb-10 max-md:grid-cols-1">
        {kidsLessons.map((lesson) => {
          const content = lesson.ageContent[ageGroup];
          const stepCount = content.steps.length;
          const quizCount = content.quiz.length;

          return (
            <Link
              key={lesson.id}
              to={`/advice/kids/${lesson.slug || lesson.id}?age=${ageGroup}&page=1&view=lesson`}
              className="no-underline group"
            >
              <Card className="overflow-hidden flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={lesson.coverImage}
                    alt={lesson.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(event) => {
                      (event.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                  <span className="absolute top-3 right-3 text-3xl bg-white/90 rounded-xl px-2 py-1 leading-none">
                    {lesson.icon}
                  </span>
                </div>
                <CardContent className="p-5 flex-1">
                  <h3 className="text-lg text-foreground mb-1 leading-tight">{lesson.title}</h3>
                  <p className="text-warm-muted text-sm leading-snug mb-3">{lesson.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span>{stepCount} steps</span>
                    <span className="text-gray-300">&middot;</span>
                    <span>{quizCount} quiz questions</span>
                  </div>
                </CardContent>
                <div className="h-1 w-full" style={{ background: lesson.color }} />
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="text-center pt-4">
        <Link to="/advice" className="text-primary font-semibold text-[0.95rem] no-underline hover:underline">
          &larr; Back to Advice
        </Link>
      </div>
    </div>
  );
}

export default KidsZone;
