import { userProfile } from "../data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

function Profile() {
  const { name, age, email, role, avatar, joinDate, donorStatus, bio, stats, badges } =
    userProfile;

  return (
    <div className="max-w-[900px] mx-auto pb-12">
      <div className="relative">
        <div className="h-40 bg-gradient-to-br from-kidney-300 via-kidney-200 to-destructive rounded-b-3xl" />
        <div className="flex items-start gap-6 px-8 -mt-12 flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="flex-1 pt-13 max-md:pt-0">
            <h1 className="text-2xl text-foreground mb-1">{name}</h1>
            <Badge variant="muted" className="mb-3">{role}</Badge>
            <p className="text-warm-text text-[0.95rem] leading-relaxed mb-3">{bio}</p>
            <div className="flex gap-2 text-warm-subtle text-sm flex-wrap max-md:justify-center">
              <span>Age: {age}</span>
              <span>&middot;</span>
              <span>{email}</span>
              <span>&middot;</span>
              <span>
                Joined{" "}
                {new Date(joinDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="pt-14 max-md:pt-0">
            <Badge variant="success" className="px-4 py-2 text-sm">
              &#9989; Organ Donor: {donorStatus}
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-8">
        <section className="mb-10">
          <h2 className="text-xl text-foreground mb-5">Your Impact</h2>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
            {[
              { value: stats.storiesRead, label: "Stories Read" },
              { value: stats.donations, label: "Donations Made" },
              { value: `$${stats.totalDonated}`, label: "Total Donated" },
              { value: stats.eventsAttended, label: "Events Attended" },
            ].map(({ value, label }) => (
              <Card key={label} className="bg-kidney-50 border-kidney-100 p-5 text-center">
                <span className="block text-3xl font-bold text-primary">{value}</span>
                <span className="block mt-1 text-xs text-warm-subtle">{label}</span>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl text-foreground mb-5">Badges Earned</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
            {badges.map((badge, index) => (
              <Card key={index} className="p-5 text-center">
                <div className="text-3xl mb-2">&#127942;</div>
                <h4 className="text-sm text-foreground mb-1">{badge.name}</h4>
                <p className="text-xs text-warm-subtle">{badge.description}</p>
              </Card>
            ))}
            {[
              { name: "Community Leader", desc: "Share 5+ stories to unlock" },
              { name: "Super Supporter", desc: "Donate to 10+ campaigns" },
            ].map((badge) => (
              <Card key={badge.name} className="p-5 text-center opacity-50 bg-gray-50">
                <div className="text-3xl mb-2">&#128274;</div>
                <h4 className="text-sm text-foreground mb-1">{badge.name}</h4>
                <p className="text-xs text-warm-subtle">{badge.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <Card className="p-8">
          <h2 className="text-xl text-foreground mb-5">Account Settings</h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Label>Full Name</Label>
              <Input type="text" defaultValue={name} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Email</Label>
              <Input type="email" defaultValue={email} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Bio</Label>
              <Textarea defaultValue={bio} rows={3} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Organ Donor Status</Label>
              <Select defaultValue={donorStatus}>
                <option value="Registered">Registered</option>
                <option value="Interested">Interested</option>
                <option value="Not registered">Not registered</option>
              </Select>
            </div>
            <div className="flex gap-3 mt-2">
              <Button>Save Changes</Button>
              <Button variant="outline" className="bg-kidney-50 text-warm-subtle border-input hover:bg-border">
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
