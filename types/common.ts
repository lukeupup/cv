export type Locale = 'en' | 'zh';

export type GeneralData = {
  avatar: string;
  title: string;
  subTitle?: string;
  generalDataItems?: {
    icon?: string;
    content: string;
  }[]
}
export type SimpleArticle = {
  title: string;
  description: string;
}
export type TimelineData = {
  title: string;
  data: {
    title: string;
    subTitle?: string;
    date?: string;
    description?: string;
  }[]
}
export type FullData = {
  [locale in Locale]: {
    generalData: GeneralData;
    aboutMe: SimpleArticle;
    workExperience: TimelineData;
  }
}