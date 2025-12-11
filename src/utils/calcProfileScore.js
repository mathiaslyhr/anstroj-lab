import { scentProfiles } from "../data/profiles";

export function calculateBestProfile(answers) {
  const scores = {
    soft_fresh: 0,
    minimal_warm: 0,
    deep_alluring: 0
  };

  for (const [category, value] of Object.entries(answers)) {
    for (const [profileId, profile] of Object.entries(scentProfiles)) {
      
      const tags = profile.tags[category];
      
      if (!tags) continue;

      // svar kan være array (situations etc)
      if (Array.isArray(value)) {
        value.forEach(v => {
          if (tags.includes(v)) scores[profileId] += 1;
        });
      } 
      else {
        if (tags.includes(value)) scores[profileId] += 1;
      }
    }
  }

  // find profile med højest point
  const bestProfile = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  return bestProfile;
}
