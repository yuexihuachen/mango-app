export type NoteId = {
    noteId: number;
}

export type NoteItem = {
    title: string;
    content?: string;
    markContent?: string;
    isPush: number;
    categoryId: number;
    tagId: number;
    pushDate?: string;
    updateDate?: string;
} & NoteId;

export type SearchParams = {
    title: string;
    isPush: number;
    categoryId: number;
    tagId: number;
}

export type NoteServerItem = {
    note_id: number;
    title: string;
    category_id: number;
    tag_id: number;
    is_push: number;
    content?: string;
    mark_content?: string;
}