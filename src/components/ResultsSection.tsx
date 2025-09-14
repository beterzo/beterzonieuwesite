import { Repeat2, Rocket, Plug, Shield } from "lucide-react";

const iconMap = {
  repeat: Repeat2,
  rocket: Rocket,
  plug: Plug,
  shield: Shield,
};

const resultsData = [
  { 
    icon: "repeat" as const, 
    title: "Minder herhaalwerk", 
    text: "Repetitieve taken gaan automatisch, jullie team houdt tijd over voor werk dat telt." 
  },
  { 
    icon: "rocket" as const, 
    title: "Snel live", 
    text: "De eerste versie staat meestal binnen 4–6 weken bij jullie in productie." 
  },
  { 
    icon: "plug" as const, 
    title: "Werkt met jullie tools", 
    text: "We sluiten aan op jullie stack: Google Workspace, Microsoft 365, AFAS, Exact, Slack, HubSpot en meer." 
  },
  { 
    icon: "shield" as const, 
    title: "Veilige data-afhandeling", 
    text: "Alles via API's, zoveel mogelijk EU-servers, geen modeltraining op klantdata." 
  }
];

export function ResultsSection() {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Title */}
        <h2 className="text-foreground mb-8 md:mb-10">
          Resultaten
        </h2>

        {/* Tablet Grid (2x2) */}
        <div 
          className="hidden md:grid lg:hidden md:grid-cols-2 gap-6"
          role="list"
          aria-label="Resultaten voor klanten"
        >
          {resultsData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                role="listitem"
                className="bg-white border border-[#E6EAF2] rounded-[14px] p-6 transition-all duration-200 hover:transform hover:translate-y-[-2px] hover:bg-[#F6F8FB] focus-within:outline-2 focus-within:outline-[#027BFF] focus-within:outline-offset-2"
                tabIndex={0}
              >
                <div className="flex flex-col gap-4">
                  <IconComponent 
                    className="h-6 w-6 text-[#027BFF] flex-shrink-0" 
                    strokeWidth={2}
                  />
                  <div className="space-y-3">
                    <h3 className="text-[#0F172A] text-lg font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#0F172A] text-base font-medium leading-[1.55] max-w-[72ch]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div 
          className="md:hidden overflow-x-auto scroll-smooth px-4 -mx-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
          }}
          role="list"
          aria-label="Resultaten voor klanten"
        >
          <div className="flex gap-4 pb-2">
            {resultsData.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={index}
                  role="listitem"
                  className="bg-white border border-[#E6EAF2] rounded-[14px] p-6 flex-shrink-0 w-[80%] transition-all duration-200 hover:transform hover:translate-y-[-2px] hover:bg-[#F6F8FB] focus-within:outline-2 focus-within:outline-[#027BFF] focus-within:outline-offset-2"
                  style={{ scrollSnapAlign: 'start' }}
                  tabIndex={0}
                >
                  <div className="flex flex-col gap-4">
                    <IconComponent 
                      className="h-6 w-6 text-[#027BFF] flex-shrink-0" 
                      strokeWidth={2}
                    />
                    <div className="space-y-3">
                      <h3 className="text-[#0F172A] text-lg font-bold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#0F172A] text-base font-medium leading-[1.55] max-w-[72ch]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div 
          className="hidden lg:grid lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Resultaten voor klanten"
        >
          {resultsData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                role="listitem"
                className="bg-white border border-[#E6EAF2] rounded-[14px] p-6 transition-all duration-200 hover:transform hover:translate-y-[-2px] hover:bg-[#F6F8FB] focus-within:outline-2 focus-within:outline-[#027BFF] focus-within:outline-offset-2"
                tabIndex={0}
              >
                <div className="flex flex-col gap-4">
                  <IconComponent 
                    className="h-6 w-6 text-[#027BFF] flex-shrink-0" 
                    strokeWidth={2}
                  />
                  <div className="space-y-3">
                    <h3 className="text-[#0F172A] text-lg font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#0F172A] text-base font-medium leading-[1.55] max-w-[72ch]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 md:mt-10">
          <p className="text-xl text-muted-foreground leading-relaxed max-w-[720px]">
            Volgens onderzoek van McKinsey kan tot circa 70% van taken worden geautomatiseerd. Resultaten verschillen per team en proces.
          </p>
        </div>
      </div>
    </section>
  );
}