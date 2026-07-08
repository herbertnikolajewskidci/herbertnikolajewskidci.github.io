export type Lang = 'en' | 'de';

export const translations = {
  en: {
    skipLink: 'Skip to content',
    themeSwitchToLight: 'Switch to light theme',
    themeSwitchToDark: 'Switch to dark theme',
    themeSwitchGeneric: 'Switch between light and dark theme',
    themeLabel: 'Theme',
    langSwitch: 'Switch language',
    langLabel: 'Language',
    langCurrentEn: 'English (current)',
    langCurrentDe: 'German (current)',
    langSwitchToEn: 'Switch to English',
    langSwitchToDe: 'Switch to German',

    heroEyebrow: '// Software Engineer & DevOps',
    heroTitle: 'Herbert Nikolajewski',
    heroTagline: 'Software and the infrastructure it runs on.',
    heroSummary:
      'Full-stack with a DevOps focus. Based in Regensburg. Since 2020 I build distributed systems — first client-facing web platforms on Node.js, now self-hosted Hetzner infrastructure running 200+ sites and a GPU LLM server. Recent migration cut cloud spend by 90%+.',
    heroCtaExperience: 'View experience',
    heroCtaContact: 'Get in touch',

    terminalCurrentFocus: 'current_focus',
    terminalLocation: 'location',
    terminalLocationValue: 'regensburg, germany · remote/hybrid',

    experienceEyebrow: '// Career',
    experienceHeading: 'Experience',
    experienceError:
      'Work history is temporarily unavailable. Please check back later or contact me directly.',

    employmentTypes: {
      'Full-time': 'Full-time',
      'Part-time': 'Part-time',
      Freelance: 'Freelance',
      Contract: 'Contract',
    } as Record<string, string>,

    skillsEyebrow: '// Toolkit',
    skillsHeading: 'Skills & Technologies',
    skillsFilterAll: 'All',
    skillsFilterDevOps: 'DevOps',
    skillsFilterFrontend: 'Frontend',
    skillsFilterBackend: 'Backend',
    skillsFilterOther: 'Other',
    skillsFilterAria: 'Filter skills by area',
    skillsStatusAll: 'Showing all skills',
    skillsStatusFiltered: (visible: number, total: number, label: string) =>
      `Showing ${visible} of ${total} ${label.toLowerCase()} skills`,
    skillLevels: {
      production: 'In production',
      teaching: 'Taught & used',
      experimental: 'Experimenting',
    } as Record<string, string>,
    skillCategories: {
      Languages: 'Languages',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Cloud & DevOps': 'Cloud & DevOps',
      Databases: 'Databases',
      Other: 'Other',
    } as Record<string, string>,

    contactEyebrow: '// Contact',
    contactHeading: "Let's build something solid.",
    contactAvailability:
      'Open for full-stack and DevOps roles from August 2026.',
    contactLeadPart2:
      'If you need someone who can ship software and keep the infrastructure running, let\u2019s talk.',
    contactCopy: 'Copy',
    contactCopied: 'Copied',
    contactEmailLabel: 'Email address',
    contactCopyAria: 'Copy email address',
    contactCopiedAria: 'Email address copied',
    contactCopyFailAria: 'Could not copy email address',
    contactResponse: 'I usually reply within 24 hours.',
    contactSendEmail: 'Send an email',
    contactViewGithub: 'View GitHub',
    contactCardLinkedInLabel: 'LinkedIn',
    contactCardLinkedInValue: 'herbert-nikolajewski',
    contactCardGithubLabel: 'GitHub',
    contactCardGithubValue: 'herbertnikolajewskidci',
    contactCardLocationLabel: 'Location',
    contactCardLocationValue: 'Regensburg, Germany · Remote/Hybrid',

    footerLegalNav: 'Legal',
    footerImprint: 'Imprint',
    footerPrivacy: 'Privacy',

    skipToContent: 'Skip to content',

    error404Title: (siteTitle: string) => `Page not found · ${siteTitle}`,
    error404Meta: 'The page you are looking for does not exist.',
    error404Heading: 'Page not found',
    error404Message:
      'The page you are looking for does not exist or has been moved.',
    error404Back: 'Back to home',
  },

  de: {
    skipLink: 'Zum Inhalt springen',
    themeSwitchToLight: 'Zur hellen Darstellung wechseln',
    themeSwitchToDark: 'Zur dunklen Darstellung wechseln',
    themeSwitchGeneric: 'Zwischen heller und dunkler Darstellung wechseln',
    themeLabel: 'Design',
    langSwitch: 'Sprache wechseln',
    langLabel: 'Sprache',
    langCurrentEn: 'Englisch (aktuell)',
    langCurrentDe: 'Deutsch (aktuell)',
    langSwitchToEn: 'Auf Englisch wechseln',
    langSwitchToDe: 'Auf Deutsch wechseln',

    heroEyebrow: '// Software Engineer & DevOps',
    heroTitle: 'Herbert Nikolajewski',
    heroTagline:
      'Software und die Infrastruktur, auf der sie läuft.',
    heroSummary:
      'Full-Stack mit DevOps-Schwerpunkt. Sitz in Regensburg. Seit 2020 baue ich verteilte Systeme — zuerst klient-orientierte Web-Plattformen auf Node.js, heute selbstgehostete Hetzner-Infrastruktur für 200+ Sites und einen GPU-LLM-Server. Letzte Migration senkte Cloud-Ausgaben um 90%+.',
    heroCtaExperience: 'Werdegang ansehen',
    heroCtaContact: 'Kontakt aufnehmen',

    terminalCurrentFocus: 'aktueller_schwerpunkt',
    terminalLocation: 'standort',
    terminalLocationValue: 'regensburg, deutschland · remote/hybrid',

    experienceEyebrow: '// Werdegang',
    experienceHeading: 'Berufserfahrung',
    experienceError:
      'Der Werdegang ist derzeit nicht verfügbar. Bitte später zurückkommen oder direkt Kontakt aufnehmen.',

    employmentTypes: {
      'Full-time': 'Vollzeit',
      'Part-time': 'Teilzeit',
      Freelance: 'Freiberuflich',
      Contract: 'Projekt',
    } as Record<string, string>,

    skillsEyebrow: '// Werkzeuge',
    skillsHeading: 'Fähigkeiten & Technologien',
    skillsFilterAll: 'Alle',
    skillsFilterDevOps: 'DevOps',
    skillsFilterFrontend: 'Frontend',
    skillsFilterBackend: 'Backend',
    skillsFilterOther: 'Sonstige',
    skillsFilterAria: 'Fähigkeiten nach Bereich filtern',
    skillsStatusAll: 'Alle Fähigkeiten',
    skillsStatusFiltered: (visible: number, total: number, label: string) =>
      `Zeigt ${visible} von ${total} ${label.toLowerCase()}-Fähigkeiten`,
    skillLevels: {
      production: 'In Produktion',
      teaching: 'Gelehrt & verwendet',
      experimental: 'Experimentell',
    } as Record<string, string>,
    skillCategories: {
      Languages: 'Sprachen',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Cloud & DevOps': 'Cloud & DevOps',
      Databases: 'Datenbanken',
      Other: 'Sonstige',
    } as Record<string, string>,

    contactEyebrow: '// Kontakt',
    contactHeading: 'Lass uns etwas Solides bauen.',
    contactAvailability:
      'Offen für Full-Stack- und DevOps-Rollen ab August 2026.',
    contactLeadPart2:
      'Wenn du jemanden brauchst, der Software ausliefert und die Infrastruktur am Laufen hält, lass uns reden.',
    contactCopy: 'Kopieren',
    contactCopied: 'Kopiert',
    contactEmailLabel: 'E-Mail-Adresse',
    contactCopyAria: 'E-Mail-Adresse kopieren',
    contactCopiedAria: 'E-Mail-Adresse kopiert',
    contactCopyFailAria: 'E-Mail-Adresse konnte nicht kopiert werden',
    contactResponse: 'Antwort meist innerhalb von 24 Stunden.',
    contactSendEmail: 'E-Mail schreiben',
    contactViewGithub: 'GitHub ansehen',
    contactCardLinkedInLabel: 'LinkedIn',
    contactCardLinkedInValue: 'herbert-nikolajewski',
    contactCardGithubLabel: 'GitHub',
    contactCardGithubValue: 'herbertnikolajewskidci',
    contactCardLocationLabel: 'Standort',
    contactCardLocationValue: 'Regensburg, Deutschland · Remote/Hybrid',

    footerLegalNav: 'Rechtliches',
    footerImprint: 'Impressum',
    footerPrivacy: 'Datenschutz',

    skipToContent: 'Zum Inhalt springen',

    error404Title: (siteTitle: string) => `Seite nicht gefunden · ${siteTitle}`,
    error404Meta: 'Die gesuchte Seite existiert nicht.',
    error404Heading: 'Seite nicht gefunden',
    error404Message:
      'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    error404Back: 'Zurück zur Startseite',
  },
} as const;

export const defaultLang: Lang = 'de';
export const availableLangs: Lang[] = ['de', 'en'];

export function detectLang(navigator: { language: string } | undefined): Lang {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
  if (stored === 'en' || stored === 'de') return stored;
  if (navigator && navigator.language && navigator.language.toLowerCase().startsWith('en')) {
    return 'en';
  }
  return defaultLang;
}