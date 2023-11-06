import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "@/store/billSlice";

interface Item {
    product: string;
    rate: number;
    quantity: number;
    total: number;
    discount: number;
}

interface ItemTableProps {
    data: Item[];
}

export function ItemTable({ data }: ItemTableProps) {
    const dispatch = useDispatch();

    const headings = [
        "Item/product",
        "Batch",
        "Warehouse",
        "Qty",
        "Rate",
        "Discount",
        "Tax",
        "Amount",
    ];

    const removeItemByProduct = (product: string) => {
        dispatch(removeItem(product));
    };

    return (
        <table className="w-full table-auto border-collapse">
            <thead className="border h-[42px] py-[16px]">
                <tr className="text-[13px] px-[16px] py-[4px]">
                    {headings.map((heading) => (
                        <th
                            className="first:text-left first:pl-[16px]"
                            key={heading}
                        >
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr
                        className="text-[12px] h-[66px] px-[16px] text-center"
                        key={item.product}
                    >
                        <td className="text-left w-[220px] pl-[16px]">
                            <p>{item.product}</p>
                            <input
                                className="outline-none text-[12px]  text-[#979797] border-dotted border-b-2 pb-[5px] mt-[5px]"
                                type="text"
                                placeholder="Enter Description"
                            />
                        </td>
                        <td>4324A</td>
                        <td>Ktm 1</td>
                        <td className="border-dotted border-b-2 px-[8px] ">
                            {item.quantity}
                         
                        </td>
                        <td className="border-dotted border-b-2  px-[8px] ">{item.rate}</td>
                        <td className="border-dotted border-b-2  px-[8px]">
                            {Math.floor(item.discount)}
                        </td>
                        <td>13% VAT</td>
                        <td>{item.total}</td>
                        <td
                            className="hover:cursor-pointer"
                            onClick={() => removeItemByProduct(item.product)}
                        >
                            <AiOutlineClose color="red" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
