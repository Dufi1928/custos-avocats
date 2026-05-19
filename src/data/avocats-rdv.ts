export interface AvocatRdv {
  slug: string;
  titre: string;
  prenom: string;
  specialite: string;
  photo: string;
  schedule: Record<string, string[]>; // getDay() key -> time slots
}

// Clés = retour de Date.getDay() : 0=dim, 1=lun, 2=mar, 3=mer, 4=jeu, 5=ven, 6=sam
export const avocatsRdv: AvocatRdv[] = [
  {
    slug: 'roetynck',
    titre: 'Maître Rachel ROETYNCK',
    prenom: 'Rachel',
    specialite: 'Droit des Mineurs',
    photo: '/avocat-rachel.jpg',
    schedule: {
      '1': ['09:00', '10:30', '14:00', '15:30'], // lundi
      '3': ['09:00', '10:30', '14:00'],           // mercredi
      '5': ['09:00', '10:30'],                    // vendredi
    },
  },
  {
    slug: 'davrillon',
    titre: 'Maître Lauriana DAVRILLON',
    prenom: 'Lauriana',
    specialite: 'Droit de la Famille',
    photo: '/avocat-lauriana.jpg',
    schedule: {
      '2': ['09:00', '10:30', '14:00', '15:30', '17:00'], // mardi
      '4': ['14:00', '15:30', '17:00'],                    // jeudi
      '5': ['10:00', '14:00', '15:30'],                    // vendredi
    },
  },
  {
    slug: 'haroune',
    titre: 'Maître Alexis HAROUNE',
    prenom: 'Alexis',
    specialite: 'Droit Pénal des Affaires',
    photo: '/avocat-alexis.jpg',
    schedule: {
      '1': ['10:00', '11:30', '15:00'],           // lundi
      '2': ['09:00', '10:30'],                    // mardi
      '4': ['09:00', '10:30', '14:00', '15:30'], // jeudi
    },
  },
  {
    slug: 'david',
    titre: 'Maître Lola DAVID',
    prenom: 'Lola',
    specialite: 'Dommages Corporels',
    photo: '/avocat-lola.jpg',
    schedule: {
      '3': ['09:00', '10:30', '14:00', '15:30'], // mercredi
      '5': ['09:00', '10:30', '14:00'],           // vendredi
    },
  },
  {
    slug: 'jaulin-denisselle',
    titre: 'Maître Chloé JAULIN-DENISSELLE',
    prenom: 'Chloé',
    specialite: 'Droit des Étrangers',
    photo: '/avocat-chloe.jpg',
    schedule: {
      '1': ['09:00', '10:30', '14:00'],           // lundi
      '2': ['14:00', '15:30'],                    // mardi
      '3': ['09:00', '10:30', '14:00', '15:30'], // mercredi
      '4': ['09:00'],                              // jeudi (urgences OQTF)
    },
  },
];
