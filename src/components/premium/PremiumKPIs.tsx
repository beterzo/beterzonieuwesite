import { Clock, Calendar, TrendingUp, Users } from "lucide-react";

const kpis = [
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
    label: "ziet verbetering binnen 30 dagen",
  },
  {
    icon: Users,
    value: "500+",
    label: "AI-agents live",
  },
];

export function PremiumKPIs() {
  return (
    <section className="section-spacing-sm bg-surface-mist">
      <div className="container mx-auto px-6">
        <div className="premium-grid grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="premium-card p-8 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[10px]">
                <kpi.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {kpi.value}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {kpi.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}