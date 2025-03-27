export type Note = {
    id: number;
    title: string;
    content: string;
    category: string;
    published: string;
}

export type InitNote = {
    notes: Note[]
    currentNote: Partial<Note>
}

export type Tab = {
    tab: string;
}

export type SearchNoteBody = {
    title: string;
    category: string;
    published: string;
}

export type InitSelectedNote = {
    selectedNote: Partial<Note>
}

