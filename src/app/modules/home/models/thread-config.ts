export interface ThreadConfig {

  threadId: number;
  series : string;

  title : string;
  description : string;
  type: string;
  genres: string[];

  avgRating: number;

  lnhUser : {
    userId : number,
    username : string,
    useremail : string,
    avatarURL? : string
  }

  editedBy : string;
  editedAt: Date;
  uploadedBy : string;
  uploadedAt: Date;

  allowAudible? : boolean;

  view? : number;

}

