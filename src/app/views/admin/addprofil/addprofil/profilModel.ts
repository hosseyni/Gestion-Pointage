import { handKeyModel } from "../../handkeys/handkeysModel";

  export interface ProfilModel {
    idPControleAccess: number,
    autorisation: string,
    designation: string,
    pointeuses: handKeyModel[],
    seuilRejet : number
  }

  export interface deviceModel {
    type: string,
    name: string,
    id: number,
  }
