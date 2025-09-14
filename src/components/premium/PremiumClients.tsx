export function PremiumClients() {
  const clients = [
    {
      name: "Bureau Reuring",
      logo: "/logos/bureau-reuring.png",
      description: "Voor Bureau Reuring werken we achter de schermen aan administratieve processen die zorgen voor meer ruimte, tijd en focus op klantcontact en strategische advisering."
    },
    {
      name: "Doxis",
      logo: "/logos/doxis.png",
      description: "Voor Doxis hebben we een slimme trechter voor DAS-aanvragen opgezet met automatische filtering, classificatie en routering naar de juiste collega, waardoor urgente cases sneller worden opgepakt en handwerk verdwijnt."
    },
    {
      name: "Vinster",
      logo: "/logos/vinster.png",
      description: "Voor Vinster hebben we een AI-loopbaanplatform opgezet met dynamisch formulier, AI-workflow en automatische PDF-rapporten via Placid, gekoppeld aan Stripe voor betalingen/licenties en Supabase als database."
    },
    {
      name: "Educared",
      logo: "/logos/educared.png",
      description: "Voor Educared hebben we een volledig geautomatiseerd contract- en e-signproces opgezet: sjabloon en ontvangers uploaden, automatisch invullen en versturen, notificatie bij ondertekening en alles centraal gearchiveerd."
    },
    {
      name: "LEK Sloopwerken",
      logo: "/logos/lek-sloopwerken.png",
      description: "Voor Lek Sloopwerken hebben we een Twilio-telefoniesysteem opgezet met IVR-keuzemenu's, call logging, voicemail-naar-mail en Make-flows die alles direct bij het juiste team laten landen."
    },
    {
      name: "De Groene Wereld",
      logo: "/logos/de-groene-wereld.png",
      description: "Voor De Groene Wereld hebben we een contentgeneratiesysteem opgezet dat modules omzet naar leerdoelen, docent- en student­samenvattingen en begrippenlijsten, inclusief exports naar PDF/Excel/Docs."
    }
  ];

  return (
    <section className="section-spacing-sm">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <h2 className="text-foreground">Vertrouwd door</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="premium-card p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}