import { Profile } from "./profile";

export interface Comment {
    commentId: number,
    commentText: string,
    date: string
}

export const initialComment: Comment = {
    commentId: 0,
    commentText: "",
    date: ""
}