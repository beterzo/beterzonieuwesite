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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-surface rounded-xl p-8 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="mb-6">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-20 w-auto object-contain mx-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {/* Plaats hier tekst over de samenwerking */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}