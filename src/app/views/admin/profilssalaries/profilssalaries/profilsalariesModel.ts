
  export interface ProfilSalarieModel {
    idProfilSalaire: number,
    designation: string,
    horraireSoir: string,
    horraireMatin: string,
    jourDebutAnnee: string,
    traitementRtt: string,
    salaireCalendaires: [],
    company: {
      idCompany: number,
      designation: string,
      usagers: [],
      profilCalendaires: [],
      typeAbsences: [
        {
          idTypeAbsence:number,
          couleur: string,
          designation: string,
          traiteAbsence: string,
          typeContabilisation: string,
          absences: []
        }
      ]
    }
 
  }