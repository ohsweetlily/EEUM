    export type Journal = {
      id:number;
      title:string;
      emotion:string;
      publishedDate:string;
      recommendedFood: {
        name : string;
        imageUrl : string;
      }
    }
  
    export type JournalListResponse = {
      success : boolean;
      items : Journal[];
      numOfItems : number;
      totalElements : number;
      page : number;
      totalPages: number;
    };
  