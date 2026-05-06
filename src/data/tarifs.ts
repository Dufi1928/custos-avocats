export interface TarifItem {
  service: string;
  detail?: string;
  prix: string;
}

export interface TarifGroupe {
  titre: string;
  items: TarifItem[];
}

export interface TarifDomaine {
  intro: string;
  groupes: TarifGroupe[];
}

export const tarifs: Record<string, TarifDomaine> = {

  'droit-penal': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse de la situation, première orientation juridique', prix: '150 – 250 €' },
        ],
      },
      {
        titre: 'Partie civile — Victime',
        items: [
          { service: 'Plainte — juridiction correctionnelle', detail: 'Rédaction, dépôt et suivi de l\'instruction', prix: '1 000 – 2 500 €' },
          { service: 'Plainte — juridiction criminelle', detail: 'Rédaction, dépôt et suivi de l\'instruction', prix: '2 000 – 4 500 €' },
          { service: 'Tribunal de police', detail: 'Représentation de la victime', prix: '400 – 700 €' },
          { service: 'Tribunal correctionnel', detail: 'Représentation, demande de dommages-intérêts', prix: '600 – 1 200 €' },
          { service: 'Tribunal pour enfants', detail: 'Victime d\'une infraction commise par un mineur', prix: '600 – 1 100 €' },
          { service: 'Cour criminelle départementale', detail: 'Représentation de la victime', prix: '1 800 – 3 500 €' },
          { service: 'Cour d\'assises', detail: 'Représentation de la victime ou des ayants droit', prix: '2 500 – 5 000 €' },
          { service: 'Cour d\'appel', detail: 'Appel correctionnel en tant que partie civile', prix: '1 000 – 2 000 €' },
        ],
      },
      {
        titre: 'Phase d\'enquête — Prévenu',
        items: [
          { service: 'Garde à vue — semaine', detail: 'Entretien initial, assistance durant la mesure', prix: '500 – 800 €' },
          { service: 'Garde à vue — week-end / nuit / jours fériés', detail: 'Majoration pour astreinte hors horaires', prix: '750 – 1 100 €' },
          { service: 'Audition libre', detail: 'Convocation OPJ sans mise en garde à vue', prix: '400 – 700 €' },
          { service: 'Délégué du procureur', detail: 'Rappel à la loi, classement sous conditions, stage', prix: '350 – 550 €' },
          { service: 'Médiation pénale', detail: 'Représentation et participation à la séance', prix: '500 – 800 €' },
        ],
      },
      {
        titre: 'Instruction',
        items: [
          { service: 'Instruction correctionnelle — sans détention', detail: 'Suivi complet jusqu\'à l\'ordonnance de renvoi', prix: '1 200 – 2 000 €' },
          { service: 'Instruction correctionnelle — avec détention', detail: 'Demandes de mise en liberté, suivi et renvoi', prix: '2 000 – 3 500 €' },
          { service: 'Instruction criminelle', detail: 'Suivi complet jusqu\'à l\'arrêt de mise en accusation', prix: '4 000 – 7 000 €' },
        ],
      },
      {
        titre: 'Audiences pénales — Adultes',
        items: [
          { service: 'Tribunal de police', detail: 'Contraventions de 5e classe', prix: '600 – 1 000 €' },
          { service: 'Tribunal correctionnel', detail: 'Délits — préparation et plaidoirie', prix: '900 – 1 800 €' },
          { service: 'Comparution immédiate', detail: 'Urgence — étude rapide du dossier et plaidoirie', prix: '900 – 1 500 €' },
          { service: 'CRPC — homologation', detail: 'Négociation de la peine proposée et homologation', prix: '550 – 900 €' },
          { service: 'Cour criminelle départementale', detail: 'Crimes punis de 15 à 20 ans', prix: '2 500 – 4 500 €' },
          { service: 'Cour d\'assises', detail: 'Crimes punis de réclusion — avec jury populaire', prix: '3 500 – 7 000 €' },
          { service: 'JIRS', detail: 'Crime organisé, grand trafic de stupéfiants', prix: '4 500 – 8 500 €' },
        ],
      },
      {
        titre: 'Audiences pénales — Mineurs',
        items: [
          { service: 'Juge des enfants — audience de cabinet', detail: 'Mesures éducatives, RRSE, admonestation', prix: '600 – 1 000 €' },
          { service: 'Tribunal pour enfants', detail: 'Audience collégiale — mineur prévenu ou partie civile', prix: '1 000 – 1 800 €' },
          { service: 'Cour d\'assises des mineurs', detail: 'Crimes commis par un mineur — avec jury', prix: '3 500 – 7 000 €' },
        ],
      },
      {
        titre: 'Voies de recours',
        items: [
          { service: 'Chambre de l\'instruction', detail: 'Appel des ordonnances JI, appel de détention', prix: '1 000 – 2 000 €' },
          { service: 'Cour d\'appel — correctionnel', detail: 'Mémoire et audience chambre des appels correctionnels', prix: '1 500 – 2 800 €' },
          { service: 'Cour d\'appel — criminel (assises d\'appel)', detail: 'Nouveau procès devant jury', prix: '4 500 – 8 500 €' },
        ],
      },
      {
        titre: 'Application des peines & Détention',
        items: [
          { service: 'Audience JAP', detail: 'Aménagement de peine, libération conditionnelle, SME', prix: '500 – 900 €' },
          { service: 'CHAAP', detail: 'Appel des décisions du JAP', prix: '750 – 1 200 €' },
          { service: 'Audience JLD', detail: 'Débat contradictoire sur placement / maintien en détention', prix: '600 – 900 €' },
          { service: 'Commission de discipline pénitentiaire', detail: 'Assistance à l\'audience disciplinaire', prix: '500 – 800 €' },
          { service: 'Requête en annulation — sanction disciplinaire', detail: 'Recours devant le tribunal administratif', prix: '700 – 1 200 €' },
          { service: 'Indemnisation — détention provisoire injustifiée', detail: 'Saisine du premier président de la cour d\'appel', prix: '1 500 – 3 000 €' },
        ],
      },
    ],
  },

  'droit-de-la-famille': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse de la situation familiale et première orientation', prix: '150 – 250 €' },
        ],
      },
      {
        titre: 'Divorce',
        items: [
          { service: 'Divorce par consentement mutuel', detail: 'Rédaction de la convention, dépôt chez notaire', prix: '1 500 – 2 500 €' },
          { service: 'Divorce judiciaire contentieux', detail: 'Assignation, audiences, jugement', prix: '2 500 – 5 000 €' },
          { service: 'Appel — cour d\'appel (JAF)', detail: 'Mémoire et plaidoirie en appel', prix: '1 500 – 2 500 €' },
        ],
      },
      {
        titre: 'Autorité parentale & Résidence',
        items: [
          { service: 'Fixation / modification de résidence', detail: 'Procédure devant le juge aux affaires familiales', prix: '1 200 – 2 500 €' },
          { service: 'Droit de visite et d\'hébergement', detail: 'Demande, modification ou suspension', prix: '900 – 1 800 €' },
          { service: 'Référé — mesures d\'urgence', detail: 'Procédure accélérée devant le JAF', prix: '800 – 1 400 €' },
        ],
      },
      {
        titre: 'Violences intrafamiliales',
        items: [
          { service: 'Ordonnance de protection', detail: 'Demande en urgence, audience, suivi', prix: '800 – 1 500 €' },
          { service: 'Constitution de partie civile', detail: 'Plainte et suivi de la procédure pénale', prix: '900 – 1 800 €' },
          { service: 'Représentation à l\'audience correctionnelle', detail: 'Plaidoirie et demande de dommages-intérêts', prix: '700 – 1 300 €' },
        ],
      },
    ],
  },

  'droit-des-mineurs': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse de la situation, orientation pour le mineur et sa famille', prix: '150 – 250 €' },
        ],
      },
      {
        titre: 'Assistance éducative',
        items: [
          { service: 'Représentation des parents devant le juge des enfants', detail: 'Audience cabinet ou collégiale', prix: '800 – 1 500 €' },
          { service: 'Appel d\'une mesure éducative', detail: 'Cour d\'appel — chambre des mineurs', prix: '1 000 – 1 800 €' },
          { service: 'Contestation d\'un placement (OPP)', detail: 'Ordonnance de placement provisoire', prix: '900 – 1 600 €' },
        ],
      },
      {
        titre: 'Mineur en conflit avec la loi',
        items: [
          { service: 'Garde à vue mineur', detail: 'Assistance immédiate, entretien, suivi de la mesure', prix: '400 – 700 €' },
          { service: 'Audience de cabinet — juge des enfants', detail: 'Mesures éducatives, RRSE, admonestation', prix: '600 – 1 000 €' },
          { service: 'Tribunal pour enfants', detail: 'Audience collégiale — mineur prévenu', prix: '1 000 – 1 800 €' },
          { service: 'Cour d\'assises des mineurs', detail: 'Crimes commis par un mineur', prix: '3 500 – 7 000 €' },
          { service: 'Appel — chambre spéciale des mineurs', detail: 'Recours contre les décisions du TPE', prix: '1 000 – 2 000 €' },
        ],
      },
    ],
  },

  'droit-des-etrangers': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse du titre de séjour, de la situation administrative et des risques', prix: '150 – 250 €' },
        ],
      },
      {
        titre: 'Éloignement du territoire',
        items: [
          { service: 'Recours OQTF — tribunal administratif', detail: 'Mémoire en défense, audience, délai urgent (48 h ou 30 j)', prix: '900 – 1 800 €' },
          { service: 'Appel — cour administrative d\'appel', detail: 'Recours contre le jugement du TA', prix: '1 200 – 2 000 €' },
          { service: 'Audience JLD — rétention administrative', detail: 'Contrôle du placement en CRA devant le juge des libertés', prix: '500 – 800 €' },
        ],
      },
      {
        titre: 'Séjour & Régularisation',
        items: [
          { service: 'Demande de titre de séjour', detail: 'Constitution du dossier préfectoral, suivi', prix: '900 – 1 800 €' },
          { service: 'Recours contre refus préfectoral', detail: 'Recours gracieux ou contentieux devant le TA', prix: '1 000 – 2 000 €' },
          { service: 'Régularisation — dossier complet', detail: 'Analyse des voies, constitution et suivi', prix: '1 200 – 2 500 €' },
        ],
      },
      {
        titre: 'Droit d\'asile',
        items: [
          { service: 'Recours CNDA', detail: 'Mémoire ampliatif, audience devant la Cour nationale', prix: '1 500 – 2 500 €' },
          { service: 'Appel — Conseil d\'État', detail: 'Pourvoi en cassation contre arrêt CNDA', prix: '2 000 – 3 500 €' },
        ],
      },
    ],
  },

  'dommages-corporels': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse du dossier médical, évaluation du préjudice, orientation', prix: '150 – 250 €' },
        ],
      },
      {
        titre: 'Expertise médicale',
        items: [
          { service: 'Assistance à expertise amiable', detail: 'Préparation, présence à l\'examen, contestation', prix: '800 – 1 500 €' },
          { service: 'Assistance à expertise judiciaire', detail: 'Suivi de la mission d\'expertise ordonnée par le tribunal', prix: '1 200 – 2 500 €' },
          { service: 'Tierce expertise / contre-expertise', detail: 'Contestation du rapport initial', prix: '1 000 – 2 000 €' },
        ],
      },
      {
        titre: 'Procédures d\'indemnisation',
        items: [
          { service: 'Accident de la route (BADINTER)', detail: 'Négociation avec l\'assureur, procédure judiciaire si nécessaire', prix: '1 500 – 3 500 €' },
          { service: 'Agression / Infraction pénale — CIVI', detail: 'Saisine de la commission d\'indemnisation des victimes', prix: '1 200 – 2 500 €' },
          { service: 'Accident médical — CRCI / CCI', detail: 'Dossier devant la commission de conciliation', prix: '2 000 – 4 000 €' },
          { service: 'Accident du travail / maladie professionnelle', detail: 'Faute inexcusable de l\'employeur', prix: '1 800 – 3 500 €' },
        ],
      },
      {
        titre: 'Voies de recours',
        items: [
          { service: 'Appel — cour d\'appel', detail: 'Recours contre le jugement de première instance', prix: '1 500 – 2 500 €' },
        ],
      },
    ],
  },

  'droit-penal-des-affaires': {
    intro: 'Tous les tarifs sont TTC. Une convention d\'honoraires écrite est établie avant toute intervention. Le premier entretien est facturé ; si un dossier est ouvert, son montant est déduit du coût de la procédure.',
    groupes: [
      {
        titre: 'Premier entretien',
        items: [
          { service: 'Consultation initiale', detail: 'Analyse du risque pénal, lecture des actes, orientation stratégique', prix: '250 – 400 €' },
        ],
      },
      {
        titre: 'Phase d\'enquête',
        items: [
          { service: 'Audition libre — dirigeant', detail: 'Convocation OPJ sans garde à vue', prix: '700 – 1 200 €' },
          { service: 'Garde à vue — dirigeant / cadre', detail: 'Assistance, entretien, suivi de la mesure', prix: '900 – 1 500 €' },
          { service: 'Perquisition — assistance', detail: 'Présence lors des opérations de perquisition', prix: '700 – 1 200 €' },
        ],
      },
      {
        titre: 'Instruction',
        items: [
          { service: 'Mise en examen — instruction correctionnelle', detail: 'ABS, fraude fiscale, corruption, recel — sans détention', prix: '3 000 – 6 000 €' },
          { service: 'Mise en examen — avec contrôle judiciaire / détention', detail: 'Demandes de mise en liberté, suivi complet', prix: '5 000 – 10 000 €' },
          { service: 'Instruction criminelle — grande délinquance financière', detail: 'JIRS / PNF — blanchiment, fraude complexe', prix: '8 000 – 15 000 €' },
        ],
      },
      {
        titre: 'Audiences',
        items: [
          { service: 'Tribunal correctionnel', detail: 'ABS, escroquerie, faux, corruption, fraude fiscale', prix: '1 500 – 3 500 €' },
          { service: 'JIRS — audience correctionnelle', detail: 'Affaires économiques et financières complexes', prix: '4 000 – 8 000 €' },
          { service: 'Cour d\'appel', detail: 'Appel correctionnel en matière économique', prix: '2 000 – 4 500 €' },
        ],
      },
    ],
  },

};
