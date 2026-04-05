import { useState } from "react";
import { fundraisers } from "../data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function Funds() {
  const [donateModalId, setDonateModalId] = useState<number | null>(null);
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for your donation of $${donationAmount}! (This is a demo — no real transaction was made.)`
    );
    setDonateModalId(null);
    setDonationAmount("");
  };

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-foreground mb-2">Fundraising Campaigns</h1>
        <p className="text-warm-muted text-lg">
          Support patients and healthcare initiatives. Every contribution makes
          a difference.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12 max-md:grid-cols-1">
        {fundraisers.map((fund) => {
          const progress = Math.round((fund.raised / fund.goal) * 100);
          return (
            <Card key={fund.id} className="overflow-hidden flex flex-col">
              <CardHeader className="relative flex justify-center pt-6 px-6 pb-0">
                <img
                  src={fund.avatar}
                  alt={fund.patient}
                  className="w-[72px] h-[72px] rounded-full object-cover border-[3px] border-kidney-200 mx-auto"
                />
                <Badge className="absolute top-4 right-4" variant="muted">
                  {fund.daysLeft} days left
                </Badge>
              </CardHeader>

              <CardContent className="px-6 py-4 flex-1">
                <h3 className="text-lg text-foreground mb-1 text-center">{fund.title}</h3>
                <p className="text-center text-warm-subtle text-sm mb-3">by {fund.patient}</p>
                <p className="text-warm-text text-sm leading-relaxed mb-5">{fund.description}</p>

                <div className="mb-2">
                  <Progress value={progress} />
                  <div className="flex justify-between mt-2">
                    <span className="font-bold text-primary text-lg">
                      ${fund.raised.toLocaleString()}
                    </span>
                    <span className="text-warm-subtle text-sm">
                      of ${fund.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{progress}% funded</span>
                    <span>{fund.donors} donors</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 gap-3">
                <Button
                  className="flex-1"
                  onClick={() => setDonateModalId(fund.id)}
                >
                  Donate Now
                </Button>
                <Button variant="outline" className="border-kidney-200 bg-kidney-50 text-primary hover:bg-kidney-100">
                  Share
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <Dialog open={donateModalId !== null} onOpenChange={() => setDonateModalId(null)}>
        <DialogContent>
          <DialogClose onClick={() => setDonateModalId(null)} />
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            to {fundraisers.find((f) => f.id === donateModalId)?.title}
          </DialogDescription>
          <form onSubmit={handleDonate}>
            <div className="grid grid-cols-4 gap-3 mb-4 max-md:grid-cols-2">
              {[10, 25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={cn(
                    "py-2.5 bg-kidney-50 border-2 border-border rounded-xl text-base font-semibold text-foreground cursor-pointer transition-all",
                    donationAmount === String(amount)
                      ? "border-primary bg-kidney-100 text-primary"
                      : "hover:border-primary hover:bg-kidney-100 hover:text-primary"
                  )}
                  onClick={() => setDonationAmount(String(amount))}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex items-center border-2 border-border rounded-xl px-4 py-2 mb-6">
              <span className="text-xl text-warm-subtle mr-2">$</span>
              <input
                type="number"
                min="1"
                placeholder="Custom amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
                className="border-none outline-none text-lg w-full text-foreground bg-transparent"
              />
            </div>
            <Button type="submit" className="w-full py-3.5 text-lg">
              Donate ${donationAmount || "0"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="text-center py-12">
        <h2 className="text-foreground mb-8">Why Donate Through Kidney Connect?</h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:max-w-[350px] max-md:mx-auto">
          {[
            { icon: "\uD83D\uDD12", title: "Transparent", desc: "Track exactly how your donation is being used." },
            { icon: "\u2705", title: "Verified", desc: "All campaigns are verified by healthcare partners." },
            { icon: "\uD83D\uDC99", title: "Direct Impact", desc: "100% of your donation goes to the patient or cause." },
          ].map(({ icon, title, desc }) => (
            <Card key={title} className="bg-kidney-50 p-8 border-0">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="text-foreground mb-2">{title}</h4>
              <p className="text-warm-muted text-sm">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funds;
