export type JournalDetail = {
    id : number;
    userid : number;
    recommendedFood : {
      name : string;
      imageUrl : string;
    };
    emotion : string;
    title : string;
    content : string;
    weather : null;
    publishedDate : string;
    createdAt : string;
    emotionScores : {
      worryScore : number;
      angryScore : number;
      happyScore : number;
      excitedScore : number;
      sadScore : number;
    };
  }

  export type JournalDetailResponse = {
    success : boolean;
    item : JournalDetail;
  };