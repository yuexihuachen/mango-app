

export type CategoryId = {
    category_id: number;
}

export type CategoryItem = {
    category_name: string;
    category_alias: string;
    create_date: string;
    update_date: string;
    order: number;
    total: number;
    count?: string;
} & CategoryId;

export type Props = {
    selectedCategory?: Partial<CategoryItem>;
    setCategory?: (category: CategoryItem) => void;
}