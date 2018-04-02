import {Chapter} from "./chapter";

export interface Book {
    author: string,
    bookId: number,
    cover: string,
    latestChapter: number,
    title: string,
    views: number,
    summary: string
    updateStatus: string,
    updateDate: string,
    tag: string,
    child: Chapter[]
}