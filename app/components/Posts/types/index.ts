export type Post = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
};

export interface Refs {
    editedTitleRef: React.RefObject<HTMLInputElement> | null;
    editedContentRef: React.RefObject<HTMLTextAreaElement> | null;
}
