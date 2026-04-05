import { Link } from "react-router-dom";
import { stats } from "../data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Home() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-kidney-300 via-kidney-200 to-destructive py-20 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-[2.75rem] text-foreground leading-tight mb-5 max-md:text-3xl">
            Every Story Matters.
            <br />
            Every Donation <span className="text-white">Saves a Life.</span>
          </h1>
          <p className="text-lg text-kidney-800 leading-relaxed mb-8">
            Kidney Connect brings together patients, donors, and communities to
            raise awareness about kidney disease and encourage organ donation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link to="/blog">Read Patient Stories</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/funds">Support a Cause</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 bg-white">
        <div className="grid grid-cols-4 gap-6 max-w-[1000px] mx-auto max-md:grid-cols-2">
          {[
            { value: stats.patientsHelped.toLocaleString(), label: "Patients Helped" },
            { value: `$${stats.totalDonations.toLocaleString()}`, label: "Donations Raised" },
            { value: stats.organDonorsRegistered.toLocaleString(), label: "Donors Registered" },
            { value: stats.storiesShared.toLocaleString(), label: "Stories Shared" },
          ].map(({ value, label }) => (
            <Card key={label} className="text-center p-6 bg-kidney-50 border-kidney-100">
              <span className="block text-3xl font-bold text-primary">{value}</span>
              <span className="block mt-2 text-sm text-warm-subtle">{label}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-kidney-50">
        <h2 className="text-center text-3xl text-foreground mb-10">
          How Kidney Connect Works
        </h2>
        <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:max-w-[400px]">
          {[
            { icon: "\uD83D\uDCDD", title: "Share Your Story", desc: "Patients and families share their personal experiences to raise awareness and find support from the community.", link: "/blog", cta: "Visit Blog" },
            { icon: "\uD83D\uDCB0", title: "Fund Treatment", desc: "Support patients financially through transparent fundraising campaigns for medical treatment and care.", link: "/funds", cta: "View Campaigns" },
            { icon: "\uD83C\uDF93", title: "Learn & Educate", desc: "Access educational content about kidney health, organ donation, and how young people can make a difference.", link: "/advice", cta: "Read Articles" },
            { icon: "\uD83E\uDD1D", title: "Connect & Support", desc: "Join a community of patients, donors, and healthcare professionals working together for kidney health.", link: "/profile", cta: "Join Us" },
          ].map(({ icon, title, desc, link, cta }) => (
            <Card key={title} className="p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg text-foreground mb-3">{title}</h3>
              <p className="text-sm text-warm-muted leading-relaxed mb-4">{desc}</p>
              <Link to={link} className="text-primary font-semibold text-sm hover:underline">
                {cta} &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-destructive py-16 px-8 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl text-white mb-4">Become an Organ Donor Today</h2>
          <p className="text-kidney-100 text-lg leading-relaxed mb-8">
            One donor can save up to 8 lives. Register as an organ donor and
            give the gift of life to those in need.
          </p>
          <Button className="bg-white text-primary hover:bg-kidney-100 px-10 py-4 text-lg">
            Register as a Donor
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
