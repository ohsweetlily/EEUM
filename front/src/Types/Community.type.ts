export type Board = {
    id: number;
    userId: number,
    authorName: string;
    category: string;
    views: number;
    title: string;
    content: string;
    commentCount?: number;
    commentList?: BoardComment[];
    createdAt: string;
}

export type BoardModel = {
    success: boolean;
    totalPages : number;
    totalElements : number;
    page : number;
    numOfItems : number;
    items : Board[];
}

export type PostBoard = {
    category: string;
    title: string;
    content: string;
}

export type BoardDetail = {
    item?: Board;
    success: boolean;
}

export type EditBoard = {
    item?: PostBoard;
    success: boolean;
}

export type DeleteBoard = {
    item: {
        id: number;
        deletedAt: string;
        isDeleted: boolean;
    };
    success: boolean;
}

export type BoardComment = {
    id: number;
    userId: number;
    authorName: string;
    boardId: number;
    content: string;
    createdAt: string;
}

export type PostBoardComment = {
    content: string;
}

export type DeleteBoardComment = {
    item: {
        id: number;
        deletedAt: string;
        isDeleted: boolean;
    };
    success: boolean;
}