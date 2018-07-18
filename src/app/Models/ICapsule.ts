export interface ICapsule {A
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  heat_shield: IHeatShield;
  thrusters: IThrusters[];
  launch_payload_mass: ILaunchPayloadMass;
  launch_payload_vol: IPayloadVolume;
  return_payload_mass: ILaunchPayloadMass;
  return_payload_vol: IPayloadVolume;
  pressurized_capsule: IPressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: IHeightWTrunk;
  diameter: IHeightWTrunk;
}

export interface IHeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

export interface IThrusters {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: IThrust;
}

export interface IThrust {
  kN: number;
  lbf: number;
}

export interface ILaunchPayloadMass {
  kg: number;
  lb: number;
}

export interface IPayloadVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface IPressurizedCapsule {
  payload_volume: IPayloadVolume;
}

export interface Trunk {
  trunk_volume: IPayloadVolume;
  cargo: ICargo;
}

export interface ICargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}

export interface IHeightWTrunk {
  meters: number;
  feet: number;
}
