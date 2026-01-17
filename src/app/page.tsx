import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background bg-gradient-radial">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient-cyan">Build Their Legacy</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              The premier platform connecting athletes with college recruiters and NIL opportunities.
              Get discovered based on your performance, not just your highlight reel.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary-glow text-primary-foreground font-semibold" asChild>
                <Link href="/rankings">View Rankings</Link>
              </Button>
              <Button size="lg" variant="secondary" className="glass" asChild>
                <Link href="/marketplace">NIL Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CAM CAMP Event Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/events/camcamp">
            <div className="glass-strong rounded-2xl p-6 md:p-8 glow-gold card-hover cursor-pointer border border-amber-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-black text-black">
                    CC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold">
                        LIVE EVENT
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-gradient-gold mt-1">
                      CAM CAMP FOOTBALL
                    </h3>
                    <p className="text-muted-foreground">
                      Player of the Year Awards - Vote Now!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">Jan 13</div>
                    <div className="text-sm text-muted-foreground">Las Vegas Championship</div>
                  </div>
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold">
                    Vote Now →
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10K+", label: "Athletes" },
              { value: "500+", label: "Colleges" },
              { value: "$2M+", label: "NIL Deals" },
              { value: "99%", label: "Accuracy" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card text-center card-hover">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyan">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              A transparent, data-driven approach to athletic recruiting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                desc: "Build a comprehensive profile with your stats, achievements, highlight videos, and academic information.",
              },
              {
                step: "02",
                title: "Get Your Rating",
                desc: "Our transparent algorithm analyzes your performance, physical attributes, academics, and NIL potential.",
              },
              {
                step: "03",
                title: "Get Discovered",
                desc: "Coaches and brands search our directory to find athletes that match their criteria. Your profile works for you 24/7.",
              },
            ].map((feature) => (
              <div key={feature.step} className="glass rounded-xl p-8 card-hover">
                <div className="text-5xl font-bold text-gradient-cyan mb-4">{feature.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating System Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Transparent <span className="text-gradient-cyan">Percentile Rating</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Unlike other platforms, we show you exactly how your rating is calculated.
                Our weighted algorithm considers multiple factors:
              </p>
              <div className="space-y-4">
                {[
                  { label: "Performance Metrics", weight: "40%", desc: "On-field achievements and stats" },
                  { label: "Physical Attributes", weight: "20%", desc: "Measurables and athletic profile" },
                  { label: "Academic Standing", weight: "15%", desc: "GPA and eligibility status" },
                  { label: "Social/NIL Potential", weight: "15%", desc: "Social media presence and marketability" },
                  { label: "Evaluations", weight: "10%", desc: "Coach and scout assessments" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-14 text-sm font-bold text-primary bg-primary/10 rounded-lg py-1 px-2 text-center">
                      {item.weight}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-strong rounded-xl p-8">
              <div className="text-center">
                <div className="text-7xl font-bold text-gradient-cyan mb-2">99%</div>
                <p className="text-xl font-bold text-foreground">Elite - #1 State Prospect</p>
                <p className="text-muted-foreground mt-2">Top 1% of all athletes</p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { percentile: "98%", label: "Elite Prospect", color: "percentile-99" },
                  { percentile: "95%", label: "5-Star Equivalent", color: "percentile-95" },
                  { percentile: "88%", label: "Power 5 Ready", color: "percentile-90" },
                  { percentile: "75%", label: "D1 Potential", color: "percentile-80" },
                  { percentile: "65%", label: "High D1/Mid-Major", color: "percentile-70" },
                ].map((tier) => (
                  <div key={tier.percentile} className="flex justify-between text-sm glass-light rounded-lg p-3">
                    <span className={`font-bold ${tier.color}`}>{tier.percentile}</span>
                    <span className="text-muted-foreground">{tier.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center glow-cyan">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Discovered?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of athletes already on the platform. Create your profile
              in minutes and start connecting with opportunities.
            </p>
            <Button size="lg" className="btn-primary-glow text-primary-foreground font-semibold" asChild>
              <Link href="/onboarding">Create Your Profile</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
