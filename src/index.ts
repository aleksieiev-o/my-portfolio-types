/* for Base entities */
export interface IBaseEntity {
  id: string;
  title: string;
  visibility: boolean;
  position: string;
  createdDate: string;
  updatedDate: string;
}

/* for Files */
export interface IFile {
  fileName: string;
  fileSrc: string;
}

/* for Socials */
export interface ISocial extends IBaseEntity {
  url: string;
}

export type TSocialList = Array<ISocial>;

/* for Skills */
export interface ISkill extends IBaseEntity {
  experience: string;
  color: string;
  isMain: boolean;
}

export type TSkillList = Array<ISkill>;

/* for Projects */
export interface IProject extends IBaseEntity, IFile {
  description: string;
  mainTechnology: string;
  releaseDate: string;
  repository: string;
  demo: string;
  technologies: Array<string>;
}

export type TProjectList = Array<IProject>;

/* for Personal info */
export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  aboutMe: string;
  country: string;
  town: string;
}
