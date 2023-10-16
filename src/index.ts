export interface IBaseEntity {
  id: string;
  title: string;
  visibility: boolean;
  position: string;
  createdDate: string;
  updatedDate: string;
}

export interface IFile {
  fileName: string;
  fileSrc: string;
}

export interface ISocial extends IBaseEntity {
  url: string;
}

export type TSocialList = Array<ISocial>;

export interface ISkill extends IBaseEntity {
  experience: string;
  color: string;
  isMain: boolean;
}

export type TSkillList = Array<ISkill>;

export interface IProject extends IBaseEntity, IFile {
  description: string;
  mainTechnology: string;
  releaseDate: string;
  repository: string;
  demo: string;
  technologies: Array<string>;
}

export type TProjectList = Array<IProject>;

interface IDocument extends IBaseEntity, IFile {
  lang: string;
}

export type TDocumentList = Array<IDocument>;

export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  aboutMe: string;
  biography: string;
  country: string;
  town: string;
}
