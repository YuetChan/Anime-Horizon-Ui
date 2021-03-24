export interface ThreadConfig {
  title : string;
  description : string;

  updatedBy : string;
  updatedAt: string;

  uploadedBy : string;
  uploadedAt: string;

  allowAudible? : boolean;

  view? : number;

  LnhUser : {
    userId : number,
    username : string,
    useremail? : string,
    avatarURL? : string
  }
}

