import { useState } from "react";
import { patients } from "../data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Blog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-foreground mb-2">Patient Stories</h1>
        <p className="text-warm-muted text-lg">
          Real stories from real people. Every voice matters in the fight
          against kidney disease.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {patients.map((patient) => (
          <Card key={patient.id} className="p-7">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-start gap-4">
                <img
                  src={patient.avatar}
                  alt={patient.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-kidney-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg text-foreground mb-0.5">{patient.name}</h3>
                  <span className="block text-xs text-primary font-medium mb-0.5">
                    {patient.diagnosis}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(patient.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <Badge variant="muted">Age {patient.age}</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <p
                className={cn(
                  "text-warm-text leading-relaxed text-[0.95rem]",
                  expandedId === patient.id
                    ? "block"
                    : "line-clamp-3"
                )}
              >
                {patient.story}
              </p>
              <button
                className="bg-transparent border-none text-primary font-semibold cursor-pointer py-2 text-sm hover:underline"
                onClick={() => toggleExpand(patient.id)}
              >
                {expandedId === patient.id ? "Show less" : "Read more"}
              </button>
            </CardContent>

            <CardFooter className="p-0 pt-4 border-t border-border gap-6">
              <button
                className={cn(
                  "flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-warm-subtle text-[0.95rem] px-2 py-1 rounded-lg transition-all hover:bg-kidney-50",
                  likedIds.includes(patient.id) && "text-destructive"
                )}
                onClick={() => toggleLike(patient.id)}
              >
                <span className="text-xl">
                  {likedIds.includes(patient.id) ? "\u2764" : "\u2661"}
                </span>
                <span>
                  {patient.likes + (likedIds.includes(patient.id) ? 1 : 0)}
                </span>
              </button>
              <span className="text-warm-subtle text-sm">
                &#128172; {patient.comments} comments
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center bg-gradient-to-br from-kidney-50 to-kidney-100 rounded-2xl p-10">
        <h2 className="text-foreground mb-3">Have a Story to Share?</h2>
        <p className="text-warm-muted mb-6 max-w-[500px] mx-auto leading-relaxed">
          Your experience can inspire others and raise awareness about kidney
          disease. Share your journey with the Kidney Connect community.
        </p>
        <Button>Share Your Story</Button>
      </div>
    </div>
  );
}

export default Blog;
