export type TagId = {
    tag_id: number;
}

export type TagItem = {
    tag_name: string;
    create_date: string;
    update_date: string;
} & TagId;