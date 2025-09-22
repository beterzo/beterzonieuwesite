import { Button } from "@/components/ui/button";
import { Clock, FileUp, Settings, Zap, Download, Check, BookOpen, GraduationCap, Building, Users } from "lucide-react";

const processSteps = [
  {
    icon: FileUp,
    title: "Upload lesstof",
    description: "Upload jouw lesmaterialen, handboeken of curriculum documenten.",
    time: "30 seconden",
  },
  {
    icon: Settings,
    title: "Stel voorkeuren in",
    description: "Kies vraagtypen, moeilijkheidsgraad en aantal vragen.",
    time: "1 minuut",
  },
  {
    icon: Zap,
    title: "AI genereert vragen",
    description: "Onze AI analyseert de content en genereert relevante toetsvragen.",
    time: "2 minuten",
  },
  {
    icon: Download,
    title: "Download & gebruik",
    description: "Ontvang kant-en-klare toetsvragen in het gewenste format.",
    time: "30 seconden",
  },
];

const questionTypes = [
  {
    title: "Meerkeuzevragen",
    description: "4-opties multiple choice met duidelijke distractor-antwoorden",
    example: '"Wat is de hoofdstad van Nederland? A) Rotterdam B) Amsterdam C) Den Haag D) Utrecht"',
  },
  {
    title: "Open vragen",
    description: "Vraagstellingen die dieper begrip testen",
    example: '"Leg uit waarom Amsterdam de hoofdstad is maar Den Haag de regeringszetel."',
  },
  {
    title: "Waar/onwaar",
    description: "Stellingen met uitleg waarom iets waar of onwaar is",
    example: '"Stelling: \'Amsterdam is zowel hoofdstad als regeringszetel van Nederland.\' (Onwaar - uitleg volgt)"',
  },
  {
    title: "Casussen",
    description: "Praktijkgerichte scenario's met bijbehorende vragen",
    example: '"Een student bezoekt Nederland voor het eerst. Welke stad zou je aanraden voor overheidsbezoeken?"',
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Automatische leerdoelen",
    description: "AI identificeert automatisch de belangrijkste leerdoelen uit jouw materiaal.",
  },
  {
    icon: Settings,
    title: "Niveauaanpassing",
    description: "Pas moeilijkheidsgraad aan voor verschillende onderwijsniveaus.",
  },
  {
    icon: Check,
    title: "Kwaliteitscontrole",
    description: "Ingebouwde controles zorgen voor relevante en accurate vragen.",
  },
  {
    icon: Download,
    title: "Multiple formats",
    description: "Export naar Word, PDF, Moodle, of andere LMS-systemen.",
  },
];

const educationLevels = [
  {
    icon: BookOpen,
    title: "Basis & voortgezet onderwijs",
    description: "Van groep 8 toetsen tot VWO examens - aangepast aan het juiste niveau.",
    subjects: ["Nederlandse taal", "Rekenen/Wiskunde", "Geschiedenis", "Aardrijkskunde", "Biologie"],
  },
  {
    icon: GraduationCap,
    title: "MBO & HBO",
    description: "Praktijkgerichte toetsen voor beroepsonderwijs en hogescholen.",
    subjects: ["Bedrijfskunde", "ICT", "Zorg & Welzijn", "Techniek", "Economie"],
  },
  {
    icon: Users,
    title: "Universitair onderwijs",
    description: "Complexe vraagstellingen voor bachelor en master programma's.",
    subjects: ["Onderzoeksmethoden", "Academisch schrijven", "Specialisatie vakken", "Thesis begeleiding"],
  },
  {
    icon: Building,
    title: "Bedrijfstrainingen",
    description: "Corporate training toetsen voor skills en compliance.",
    subjects: ["ARBO & Veiligheid", "Soft skills", "Product training", "Compliance", "Leiderschapsontwikkeling"],
  },
];

export default function ToetsGenerator() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-6">
              <h1 className="text-foreground">
                Toetsvragen generator
              </h1>
              <div className="flex items-center gap-6 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  4 minuten proces
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  80% tijdsbesparing
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                AI-gegenereerde toetsvragen die perfect aansluiten bij jouw lesstof. Van upload tot kant-en-klare toets in slechts 4 minuten.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <a href="/plan-gesprek">Plan demo</a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="section-spacing bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-foreground">
              <span className="text-primary">Tijdsbesparing</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card p-8 text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Handmatig maken:</h3>
                <div className="text-4xl font-bold text-muted-foreground">20 minuten</div>
              </div>
              
              <div className="premium-card p-8 text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Met AI generator:</h3>
                <div className="text-4xl font-bold text-primary">4 minuten</div>
              </div>
              
              <div className="premium-card p-8 text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Tijdsbesparing:</h3>
                <div className="text-4xl font-bold text-primary">80%</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Bij 1 toets per week: <span className="font-semibold text-primary">14 uur besparing per jaar</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Van lesstof naar toets in <span className="text-primary">4 minuten</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Simpel, snel en effectief. Ons gestroomlijnde proces zorgt ervoor dat je binnen enkele minuten professionele toetsvragen hebt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="premium-card p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px]">
                      <step.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Question Types Section */}
      <section className="section-spacing bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Verschillende <span className="text-primary">vraagtypen</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Onze AI genereert diverse vraagtypen die perfect aansluiten bij jouw onderwijsdoelen en -niveau.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {questionTypes.map((type, index) => (
                <div key={index} className="premium-card p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                  <div className="bg-surface-mist p-4 rounded-[10px] border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Voorbeeld:</span><br />
                      {type.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Slimme features voor <span className="text-primary">betere toetsen</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Onze AI doet meer dan alleen vragen genereren - het zorgt voor kwaliteit, relevantie en perfecte aansluiting bij jouw curriculum.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px]">
                    <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Levels Section */}
      <section className="section-spacing bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Voor elk <span className="text-primary">onderwijsniveau</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Van basisschool tot universiteit, van MBO tot bedrijfstrainingen - onze AI past zich aan aan jouw specifieke onderwijscontext.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {educationLevels.map((level, index) => (
                <div key={index} className="premium-card p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px]">
                      <level.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {level.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {level.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Populaire vakken:</p>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Klaar om <span className="text-primary">80% tijd</span> te besparen?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Probeer onze toetsvragen generator gratis en ervaar hoe makkelijk het is om professionele toetsen te maken.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary text-lg px-12 py-6">
                <a href="/plan-gesprek">Plan gratis demo</a>
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-12 py-6">
                Meer informatie
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}