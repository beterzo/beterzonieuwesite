const achievements = [
  {
    value: "3.000+",
    label: "uren geautomatiseerd",
  },
  {
    value: "92%",
    label: "verbetering ervaren",
  },
  {
    value: "30+",
    label: "projecten afgerond",
  },
  {
    value: "8 weken",
    label: "gemiddelde implementatie",
  },
  {
    value: "24/7",
    label: "beschikbaarheid",
  },
  {
    value: "500+",
    label: "AI-agents actief",
  },
];

export function TrackRecordSection() {
  return (
    <section className="py-20 track-record-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bewezen resultaten
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Concrete cijfers van onze succesvolle projecten
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center slide-up">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {achievement.value}
              </div>
              <div className="text-sm opacity-80 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}