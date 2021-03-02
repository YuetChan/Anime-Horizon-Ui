export interface Overview {
  title : string;
  description : string;

  updatedBy : string;
  updatedAt: string;

  uploadedBy : string;
  uploadedAt: string;

  view? : number;

  creator : string;
}

export interface CachedCreatorsAndTags {
  cachedCreators? : string[],
  cachedTags? : string[]
}
