export type JournalDelete = {
    item : {
      id : number;
      userid : number;
      title : string;
      content : string;
      weather : null;
      updatedAt : string;
      publishedDate : string;
      createdAt : string;
      deletedAt : string;
      isDeleted : string;
    }
    }
  
    export type JournalDeleteResponse = {
      success : boolean;
      item : JournalDelete;
    };
