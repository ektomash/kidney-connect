import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Mascot from "../components/Mascot";

function Advice() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl text-foreground mb-2">Advice & Education</h1>
        <p className="text-warm-muted text-lg max-w-[600px] mx-auto">
          Learn about kidney health, organ donation, and how you can make a
          difference. Knowledge is the first step toward change.
        </p>
      </div>

      <Link
        to="/advice/kids"
        className="block no-underline bg-gradient-to-br from-kidney-50 via-[#ffe8e0] to-[#fff5e6] rounded-2xl py-7 px-8 mb-8 border-2 border-kidney-100 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(192,57,43,0.12)] hover:border-kidney-200"
      >
        <div className="flex items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
          <div className="flex-1">
            <Badge className="mb-2">NEW</Badge>
            <h2 className="text-xl text-foreground mb-1">Kids Zone &#10024;</h2>
            <p className="text-warm-muted text-[0.95rem] leading-relaxed mb-3">
              Fun interactive lessons about kidney health for ages 7-16!
              Learn with Rinni, your kidney buddy.
            </p>
            <span className="text-primary font-semibold text-[0.95rem]">
              Start Learning &rarr;
            </span>
          </div>
          <div className="shrink-0">
            <Mascot pose="idle" size={100} />
          </div>
        </div>
      </Link>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cn(
              "px-5 py-2 rounded-full border font-medium text-sm cursor-pointer transition-all duration-200",
              selectedCategory === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-warm-muted border-border hover:bg-kidney-50 hover:border-kidney-200"
            )}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mb-12 max-md:grid-cols-1">
        {filtered.map((article) => (
          <Card key={article.id} className="overflow-hidden flex flex-col">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-xl text-xs font-semibold">
                {article.category}
              </span>
            </div>
            <CardContent className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xs font-semibold">{article.author}</span>
                <span className="text-gray-300">&middot;</span>
                <span className="text-gray-400 text-xs">{article.readTime}</span>
              </div>
              <h3 className="text-lg text-foreground mb-2 leading-tight">{article.title}</h3>
              <p className="text-warm-text text-sm leading-relaxed flex-1">{article.summary}</p>

              {expandedId === article.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-warm-text text-sm leading-relaxed">{article.content}</p>
                </div>
              )}

              <button
                className="bg-transparent border-none text-primary font-semibold cursor-pointer pt-3 text-sm text-left hover:underline"
                onClick={() =>
                  setExpandedId(expandedId === article.id ? null : article.id)
                }
              >
                {expandedId === article.id ? "Show less" : "Read article"} &rarr;
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-gradient-to-br from-kidney-50 to-kidney-100 rounded-2xl p-12 text-center">
        <h2 className="text-foreground mb-8 text-2xl">Quick Facts About Kidney Health</h2>
        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2">
          {[
            { number: "850M", text: "people worldwide are affected by kidney disease" },
            { number: "1 in 10", text: "adults globally has some form of chronic kidney disease" },
            { number: "8", text: "lives can be saved by a single organ donor" },
            { number: "90%", text: "of kidney disease can be prevented with early detection" },
          ].map(({ number, text }) => (
            <Card key={number} className="p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-0">
              <div className="text-4xl font-extrabold text-primary mb-2">{number}</div>
              <p className="text-warm-muted text-sm leading-snug">{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Advice;
