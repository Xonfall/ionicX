export interface INextLaunch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: IRocket;
    telemetry: ITelemetry;
    reuse: IReuse;
    launch_site: ILaunchsite;
    launch_success?: any;
    links: ILinks;
    details?: any;
  }
  
  export interface ILinks {
    mission_patch?: any;
    mission_patch_small?: any;
    reddit_campaign: string;
    reddit_launch?: any;
    reddit_recovery?: any;
    reddit_media?: any;
    presskit?: any;
    article_link?: any;
    wikipedia?: any;
    video_link?: any;
  }
  
  export interface ILaunchsite {
    site_id: string;
    site_name: string;
    site_name_long: string;
  }
  
  export interface IReuse {
    core: boolean;
    side_core1: boolean;
    side_core2: boolean;
    fairings: boolean;
    capsule: boolean;
  }
  
  export interface ITelemetry {
    flight_club?: any;
  }
  
  export interface IRocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: IFirststage;
    second_stage: ISecondstage;
  }
  
  export interface ISecondstage {
    payloads: IPayload[];
  }
  
  export interface IPayload {
    payload_id: string;
    reused: boolean;
    customers: string[];
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs?: any;
    orbit: string;
  }
  
  export interface IFirststage {
    cores: ICore[];
  }
  
  export interface ICore {
    core_serial: string;
    flight: number;
    block: number;
    reused: boolean;
    land_success?: any;
    landing_type?: any;
    landing_vehicle?: any;
  }