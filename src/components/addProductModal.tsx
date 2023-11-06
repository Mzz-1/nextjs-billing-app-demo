"use client";

import { InputBox } from "./inputBox";
import { addItem } from "@/store/billSlice";
import { useDispatch } from "react-redux";

interface Products {
    product: string;
    rate: number;
    quantity: number;
    discount: number;
    total: number;
}

interface AddProductModalProps {
    products: Products[];
}

export function AddProductModal({ products }: AddProductModalProps) {
    const dispatch = useDispatch();
    const handleClick = (items: Products) => {
        dispatch(addItem(items));
    };

    return (
        <div className="text-[12px]  w-[480px] h-[408px] text-center rounded-[16px] bg-[#FFFFFF] overflow-scroll border">
            <InputBox
                type="text"
                placeholder="Search Products"
                required={false}
            />
            <ul className="px-[16px] text-left">
                {products.map((items: any) => {
                    return (
                        <li
                            className=" font-[400] h-[43px]  border-b mb-[8px] cursor-pointer"
                            key={items.product}
                            onClick={() => handleClick(items)}
                        >
                            <div className="w-full">
                                <div className="flex justify-between">
                                    {" "}
                                    <p className="text-[13px] font-[500]">
                                        {" "}
                                        {items.product}
                                    </p>{" "}
                                    <p className="text-[11px] text-[#979797]">
                                        <span>Rs.</span>
                                        {items.rate}
                                    </p>{" "}
                                </div>

                                <p className="text-[11px]">
                                    <span className="text-[#00A8E8] mr-[16px]">
                                        25684
                                    </span>{" "}
                                    <span className="text-[#979797]">
                                        Batch: 256848A
                                    </span>{" "}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className="text-[12px] text-[#00A8E8] font-[500] h-[40px]">
                Add New
            </button>
        </div>
    );
}
