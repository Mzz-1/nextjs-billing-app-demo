import { useSelector } from "react-redux";

interface BillItem {
    property: string;
    value: number;
}

export function ItemBill() {
    const bill = useSelector((state: any) => state.bill);
    const totalDiscount: number = bill?.totalDiscount;
    const totalAmount: number = bill?.totalAmount;

    const billItems: BillItem[] = [
        { property: "Total", value: totalDiscount + totalAmount },
        { property: "Total Excise Duty", value: 0 },
        { property: "Discount", value: totalDiscount },
        { property: "Non-taxable Total", value: 0 },
        { property: "Taxable Total", value: 0 },
        { property: "VAT", value: 0 },
        { property: "Grand Total", value: totalAmount },
    ];

    return (
        <div className="text-[12px] p-[8px]">
            <ul>
                {billItems.map((item, index) => (
                    <li
                        className="mb-[12px] font-[400] last:border-t-[1px] last:border-[#00171F] last:pt-[8px] last:font-[500]"
                        key={item.property}
                    >
                        <div className="flex justify-between">
                            <p
                                className={`${
                                    item.property === "Discount"
                                        ? "py-[8px]"
                                        : ""
                                }`}
                            >
                                {item.property}{" "}
                                {item.property === "Discount" && (
                                    <input
                                        className="text-black bg-[#F0F0F0] outline-none rounded-[4px] w-[80px] h-[24px] pl-[8px]"
                                        type="number"
                                        placeholder="Amount"
                                    />
                                )}
                            </p>{" "}
                            <p
                                className={`${
                                    item.property === "Discount"
                                        ? "border-dotted border-y-2   w-[80px] text-right py-[8px]"
                                        : ""
                                }`}
                            >
                                {" "}
                                {Math.floor(item.value)}
                            </p>
                        </div>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
}
