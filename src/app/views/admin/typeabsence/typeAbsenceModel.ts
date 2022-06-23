
  export interface TypeAbsenceModel {
    idPridTypeAbsence: number,
    couleur: string,
    designation: string,
    horraireMatin: string,
    traiteAbsence: string,
    typeContabilisation: string,
    absences: [],
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