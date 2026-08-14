import { profileData, education, certifications, skillCategories, projects } from '@/data/portfolio';

export function generateResumeText(): string {
  const skills = skillCategories
    .map((cat) => `  ${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`)
    .join('\n');

  const edu = education
    .map((e) => `  • ${e.degree}\n    ${e.institution} | ${e.period} [${e.status}]`)
    .join('\n');

  const certs = certifications
    .map((c) => `  • ${c.title} - ${c.issuer} (${c.date})`)
    .join('\n');

  const proj = projects
    .map((p) => `  • ${p.title}\n    ${p.description}\n    Tech: ${p.technologies.join(', ')}`)
    .join('\n');

  return `===========================================
        KOTHANURU VAISHNO DEVI
===========================================

${profileData.title} | ${profileData.subtitle}
Email: ${profileData.email}
Location: ${profileData.location}
GitHub: ${profileData.github}
LinkedIn: ${profileData.linkedin}

-------------------------------------------
ABOUT
-------------------------------------------
${profileData.about.join('\n\n')}

-------------------------------------------
SKILLS
-------------------------------------------
${skills}

-------------------------------------------
PROJECTS
-------------------------------------------
${proj}

-------------------------------------------
EDUCATION
-------------------------------------------
${edu}

-------------------------------------------
CERTIFICATIONS
-------------------------------------------
${certs}

-------------------------------------------
${new Date().getFullYear()} Kothanuru Vaishno Devi. All rights reserved.
`;
}

export function downloadResume() {
  const text = generateResumeText();
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Kothanuru_Vaishno_Devi_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
