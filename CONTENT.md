# CONTENU & STRUCTURE — CUSTOS AVOCATS

---

## 1. Configuration des Routes (src/pages/)

| Route | Composant Page | Description |
| :--- | :--- | :--- |
| `/` | `index.astro` | Accueil : Urgence GAV, présentation flash et accès pôles. |
| `/cabinet` | `cabinet.astro` | Mission, engagements et valeurs du cabinet. |
| `/equipe` | `equipe.astro` | Page commune présentant les 5 avocats associés. |
| `/expertises/[slug]` | `[slug].astro` | Routes dynamiques pour les 5 spécialités (Content Collections). |
| `/honoraires` | `honoraires.astro` | Transparence tarifaire et Aide Juridictionnelle. |
| `/contact` | `contact.astro` | Formulaire, Google Maps et contacts d'urgence. |

---

## 2. Contenu de la Page Cabinet (cabinet.astro)

- **Titre :** Le Cabinet
- **Accroche :** Fondé sur la conviction que la défense pénale exige expertise technique et engagement humain.
- **Engagements (à préciser) :**
    1. Disponibilité absolue — 24h/24, 7j/7
    2. Transparence totale — honoraires clairs, stratégie expliquée
    3. Confidentialité absolue — secret professionnel sans réserve
    4. Excellence sans compromis — rigueur identique sur chaque dossier
- **Valeurs (à préciser) :**
    1. Indépendance — aucune pression, seuls les intérêts du client
    2. Solidarité — expertise collective des 5 associés
    3. Humanité — écoute et accompagnement au-delà du juridique
    4. Combativité — plaidoirie avec conviction

---

## 3. Contenu de la Page Équipe (equipe.astro)

- **Titre :** Nos Avocats Associés.
- **Accroche :** "L'expertise du droit pénal renforcée par des compétences spécialisées."
- **Les 5 Profils (Structure du composant CardAvocat) :**
    1. **Avocat 1 :** Socle Pénal + **Droit des Mineurs**
    2. **Avocat 2 :** Socle Pénal + **Droit des Étrangers**
    3. **Avocat 3 :** Socle Pénal + **Droit de la Famille**
    4. **Avocat 4 :** Socle Pénal + **Droit Pénal des Affaires**
    5. **Avocat 5 :** Socle Pénal + **Dommages Corporels**

---

## 3. Contenu des Pages Expertises (src/content/expertises/)

### A. Droit Pénal (Tronc commun)
- **Focus :** Garde à vue, Comparution immédiate, Assises.
- **CTA :** "Numéro d'urgence 24h/24".

### B. Spécialités Satellites (1 page par expert) :
- **Droit des Mineurs :** Assistance éducative, juge des enfants.
- **Droit des Étrangers :** Recours OQTF, visas, régularisation.
- **Droit de la Famille :** Divorce conflictuel, violences intrafamiliales.
- **Droit Pénal des Affaires :** Compliance, abus de biens sociaux, dirigeants.
- **Dommages Corporels :** Indemnisation des victimes, expertise médicale.

---

## 4. Éléments de Réassurance (Composants Globaux)

- **Header :** Menu minimaliste, Logo Custos, Bouton d'urgence.
- **Footer :** Mentions légales, Plan du site, Liens réseaux pro.
- **Banner :** Rappel "Secret Professionnel" et "Première consultation".
