export type PostType = 'post' | 'page' | 'attachment' | 'revision' | 'nav_menu_item';
export type PostFormat = 'aside' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio' | 'chat';
export type PostStatus = 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit';

export interface WPPostObject {
    id?: number;
    date?: Date;
    date_gmt?: Date;
    guid?: {rendered: string};
    modified?: string;
    modified_gmt?: string;
    slug?: string;
    type?: PostType;
    link?: string;
    title?: {rendered: string};
    content?: {rendered: string; protected: boolean;};
    excerpt?: {rendered: string; protected: boolean;};
    author?: number;
    featured_media?: number;
    comment_status?: string;
    ping_status?: string;
    sticky?: boolean;
    format?: PostFormat;
    meta?: any;
    categories?: number[];
    tags?: any[];
}
