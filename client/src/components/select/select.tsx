type SelectProps<T> = {
    value: number;
    onSelectedValue: (value: T) => void;
    items: {
        id: number;
        name: string;
    }[]
}

const Select = (props: SelectProps<string>) => {
    const { value, onSelectedValue, items } = props;
    return <>
        <select
            name="category"
            autoComplete="category-name"
            value={value}
            onChange={(e) => onSelectedValue(e.target.value)}
            className="px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
            {items.map((item) => {
                return (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                );
            })}
        </select>
    </>
}

export default Select;