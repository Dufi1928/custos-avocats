# DIRECTION ARTISTIQUE — CUSTOS AVOCATS
## Philosophie : Classe & Apaisante

Ce document définit l'orientation visuelle et conceptuelle du projet **Custos Avocats**, spécialisé en droit pénal.

---

## 1 — PHILOSOPHIE DU DESIGN

L'objectif est de s'éloigner des codes traditionnels du droit pénal (souvent trop froids ou agressifs) pour proposer une expérience **"Classe et Apaisante"**. On veut que le client, souvent dans une situation de stress intense, se sente dans un environnement sécurisant et professionnel.

---

## 2 — PALETTE DE COULEURS

Le design repose sur un équilibre entre la rigueur institutionnelle et la sérénité organique.

### Autorité (Base)

| Token | Valeur | Usage |
|---|---|---|
| `--texte` | `#1A1A1A` | Texte principal, titres, structures |
| `--anthracite` | `#3D3D3D` | Texte secondaire, corps long |
| `--gris` | `#888888` | Labels, métadonnées, placeholders |
| `--gris-clair` | `#DDDDD8` | Bordures fines, séparateurs |
| `--fond` | `#F5F5F5` | Fond principal (évite le blanc pur trop agressif) |
| `--blanc` | `#FFFFFF` | Surfaces de cartes, zones de saisie |

### Apaisement (Accent)

| Token | Valeur | Usage |
|---|---|---|
| `--vert` | `#4A5D4E` | Accent principal : bordures actives, icônes, CTA hover |
| `--vert-vif` | `#5A7060` | Hover states |
| `--vert-pale` | `rgba(74, 93, 78, 0.10)` | Fonds doux sur tags et badges |

> **Usage du vert :** Présent mais subtil. Iconographie, bordures fines, boutons (hover), séparations graphiques.

---

## 3 — ÉLÉMENTS VISUELS

- **Végétal :** Intégration de visuels de plantes (type Monstera, Ficus) pour casser le côté "froid" du cabinet.
- **Matériaux :** Rappel de textures nobles (bois sombre, papier texturé, cuir) dans les fonds et images.
- **Minimalisme :** Aucune fioriture, aucune couleur flashy. Haut de gamme.

---

## 4 — TYPOGRAPHIE

| Usage | Police | Variantes |
|---|---|---|
| **Titres** | *Playfair Display* (serif) | 400, 700 — évoque l'histoire, la loi, la confiance |
| **Corps de texte** | *Inter* (sans-serif) | 400, 600 — aéré, moderne, lisible |

```css
--font-serif: 'Playfair Display', Georgia, serif;
--font-sans:  'Inter', system-ui, sans-serif;
```

> Hébergées via `@fontsource` (npm), importées dans `Base.astro` — pas de dépendance Google Fonts.

---

## 5 — PRINCIPES VISUELS

1. **Crédibilité :** Professionnalisme visible dès le premier regard.
2. **Sérénité :** Interface calme, espacement généreux, typographie sobre.
3. **Action :** Contact facilité, sans être intrusif.

- **Fond crème** (#F5F5F5) : plus doux que le blanc pur, moins agressif que le noir.
- **Rayon de coin minimal** (3px) : sobriété, pas de style "app mobile".
- **Transitions lentes** (0.25s ease) : tout changement d'état est fluide, jamais brutal.
- **Vert en retenue** : jamais en aplat de fond, toujours en accent ou bordure.

---

## 6 — CONTRASTES WCAG AA (à valider définitivement)

| Texte | Fond | Ratio cible |
|---|---|---|
| `--texte` (#1A1A1A) sur `--fond` (#F5F5F5) | — | ≥ 4.5:1 ✓ |
| `--anthracite` (#3D3D3D) sur `--fond` (#F5F5F5) | — | ≥ 4.5:1 ✓ |
| `--vert` (#4A5D4E) sur `--fond` (#F5F5F5) | — | À vérifier |

---

## 7 — À DÉFINIR

- [ ] Visuels végétaux (photos ou illustrations SVG ?)
- [ ] Traitement Hero (image de fond ? split layout ?)
- [ ] Mode sombre éventuel
- [ ] Iconographie (SVG custom ?)
- [ ] Animations GSAP scroll-triggered (after above-fold CSS-only)
