export function PremiumClients() {
  const clients = [
    {
      name: "Bureau Reuring",
      logo: "/logos/bureau-reuring.png"
    },
    {
      name: "Doxis",
      logo: "/logos/doxis.png"
    },
    {
      name: "Vinster",
      logo: "/logos/vinster.png"
    }
  ];

  return (
    <section className="section-spacing-sm">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Vertrouwd door
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group transition-all duration-300 p-6 rounded-xl hover:bg-surface/50"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}