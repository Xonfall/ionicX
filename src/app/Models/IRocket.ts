export interface IRocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: IHeight;
  diameter: IDiameter;
  mass: IMass;
  payload_weights: IPayloadWeightsEntity;
  first_stage: IFirstStage;
  second_stage: ISecondStage;
  engines: IEngines;
  landing_legs: ILandingLegs;
  description: string;
}
export interface IMass {
  kg: number;
  lb: number;
}
export interface IPayloadWeightsEntity {
  id: string;
  name: string;
  kg: number;
  lb: number;
}
export interface IFirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: IThrustSeaLevel;
  thrust_vacuum: IThrustVacuum;
  cores?: number;
}
export interface IThrustSeaLevel {
  kN: number;
  lbf: number;
}
export interface IThrustVacuum {
  kN: number;
  lbf: number;
}
export interface IThrust {
  kN: number;
  lbf: number;
}
export interface ISecondStage {
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: IThrust;
  payloads: IPayloads;
}
export interface IPayloads {
  option_1: string;
  composite_fairing: ICompositeFairing;
  option_2: string;
}
export interface ICompositeFairing {
  height: IHeight;
  diameter: IDiameter;
}
export interface IHeight {
  meters: number;
  feet: number;
}
export interface IDiameter {
  meters: number;
  feet: number;
}
export interface IEngines {
  number: number;
  type: string;
  version: string;
  layout?: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: IThrustSeaLevel;
  thrust_vacuum: IThrustVacuum;
  thrust_to_weight: number;
}
export interface ILandingLegs {
  number: number;
  material: string;
}
