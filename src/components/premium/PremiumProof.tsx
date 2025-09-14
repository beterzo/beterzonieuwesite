import { Users, Clock, TrendingUp, Calendar, Zap, Target } from "lucide-react";

const achievements = [
  {
    icon: Users,
    value: "30+",
    label: "projecten",
  },
  {
    icon: Clock,
    value: "3.000+",
    label: "uren geautomatiseerd",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "sneller resultaat",
  },
  {
    icon: Calendar,
    value: "8 weken",
    label: "tot volledige integratie",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "beschikbaarheid",
  },
  {
    icon: Target,
    value: "500+",
    label: "AI-agents actief",
  },
];

export function PremiumProof() {
  return (
    <section className="section-spacing dark-section">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl">
            Bewezen <span className="text-primary">resultaten</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl">
            Concrete cijfers van succesvolle automatisering
          </p>
        </div>
        
        <div className="premium-grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-[10px]">
                <achievement.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm opacity-80">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Quote */}
        <div className="max-w-4xl">
          <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6 opacity-90">
            "Binnen 2 weken hadden wij 15 uur per week terug. Nu kunnen we ons focussen op 
            strategisch werk in plaats van administratie."
          </blockquote>
          <cite className="text-primary font-medium">
            — Sarah, Onderwijsmanager
          </cite>
        </div>
      </div>
    </section>
  );
}