import { Clock, Calendar, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "7 uur",
    label: "per week bespaard",
  },
  {
    icon: Calendar,
    value: "180 uur",
    label: "per jaar terug",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "ervaart verbetering binnen 30 dagen",
  },
  {
    icon: Users,
    value: "500+",
    label: "AI-agents live",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center slide-up bg-card p-8 rounded-2xl shadow-sm border border-card-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}