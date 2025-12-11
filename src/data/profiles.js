export const scentProfiles = {
  soft_fresh: {
    id: "soft_fresh",
    title: "Soft Fresh",
    short: "En ren og lys duftpersonlighed med fokus på lethed, klarhed og et naturligt, ubesværet udtryk.",
    long: `
Soft Fresh er til dig, der foretrækker dufte, som føles som et let åndedrag. Du trives i renhed, klarhed og en følelse af lyshed — duftens tilstedeværelse skal være mærkbar, men aldrig påtrængende.

Din duftpersonlighed læner sig mod subtile nuancer: bløde citrusnoter, rene musk-toner og grønne strejf, der følger dig naturligt uden at fylde et rum. Du vælger ofte dufte, der harmonerer med din egen energi, og som understøtter en følelse af lethed og overskud i hverdagen.

Du føler dig hjemme i dufte, der giver dig ro og klarhed — noget, der føles tidløst og ubesværet. Soft Fresh er en profil, der løfter uden at skubbe, og som passer til mennesker der foretrækker varme, naturlige relationer og et enkelt, afklaret udtryk.
`,
    // scoring tags
    tags: {
      mood: ["soft_clean", "fresh_minimal", "bright_uplifting"],
      notes: ["floral", "fresh", "citrus"],
      intensity: ["discreet", "light"],
      expression: ["natural"],
      sensitivity: ["sensitive", "mild"],
      intent: ["everyday", "fresh_uplifting"]
    }
  },

  minimal_warm: {
    id: "minimal_warm",
    title: "Minimal Warm",
    short: "En rolig, varm og afbalanceret duftpersonlighed, der favner nærhed, dybde og diskret elegance.",
    long: `
Minimal Warm er en duftpersonlighed, der handler om ro, dybde og nærvær. Du foretrækker dufte, der føles som en blød omfavnelse: varme trænoter, cremet musk, diskrete florale lag og en tone af noget trygt og forankret.

Du værdsætter balance — en duft må gerne have substans, men den skal aldrig dominere. Den skal følge dig tæt, som et stille lag af varme, der understøtter din personlige stil uden at overskygge den.

Minimal Warm passer til dig, der søger noget modent, roligt og æstetisk. En duft, der føles som dig: bare i en lidt mere afrundet og sanselig version. Profilen er forbundet med tryghed, varme og en let elegance, der udfolder sig stille gennem dagen.
`,
    tags: {
      mood: ["warm_cozy"],
      notes: ["amber", "warm_floral", "musk", "creamy"],
      intensity: ["balanced"],
      expression: ["elegant"],
      sensitivity: ["medium"],
      intent: ["warm_safe"]
    }
  },

  deep_alluring: {
    id: "deep_alluring",
    title: "Deep Alluring",
    short: "En dyb og karakterfuld duftpersonlighed med varme, sensuelle nuancer og et markant, elegant udtryk.",
    long: `
Deep Alluring er til dig, der ikke er bange for at bære en duft med tilstedeværelse. Du tiltrækkes af varme ambertoner, mørke florals, sensuelle musk-noter og nuancer, der skaber dybde og mystik.

Din duftpersonlighed har en naturlig styrke — du foretrækker dufte, der sætter en stemning og bliver i rummet et øjeblik efter dig. Det er ikke intensitet for intensitetens skyld, men et ønske om at bære noget, der har karakter, varme og en underspillet dramatik.

Deep Alluring er for dem, der ønsker en duft, der føles som et aftryk; en varm silhuet eller en blød skygge. Den er markant, men stadig elegant — en profil, der understøtter din selvsikkerhed og gør hverdagsøjeblikke mere sanselige og levende.
`,
    tags: {
      mood: ["deep_alluring"],
      notes: ["amber", "dark_floral", "spice"],
      intensity: ["strong"],
      expression: ["confident"],
      sensitivity: ["not_sensitive"],
      intent: ["standout"]
    }
  }
};
