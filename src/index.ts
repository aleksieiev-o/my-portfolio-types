export interface IBaseEntity {
  id: string;
  title: string;
  visibility: boolean;
  position: number;
  createdDate: string;
  updatedDate: string;
}

export interface IFile {
  fileName: string;
  fileSrc: string;
}

export type TFileList = Array<IFile>;

export interface ISocial extends IBaseEntity {
  url: string;
  iconName: string;
}

export type TSocialList = Array<ISocial>;

export interface ISkill extends IBaseEntity {
  experience: string;
  color: string;
  isMain: boolean;
}

export type TSkillList = Array<ISkill>;

export interface IProject extends IBaseEntity {
  description: string;
  mainTechnology: string;
  releaseDate: string;
  repository: string;
  demo: string;
  technologies: Array<string>;
  preview: IFile;
  screensList: TFileList;
}

export type TProjectList = Array<IProject>;

export interface IDocument extends IBaseEntity {
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
  mapPoint: string;
}
