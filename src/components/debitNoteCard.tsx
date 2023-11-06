"use client";

import { useState } from "react";
import { Header } from "./header";
import { InputBox, TextArea, Dropdown } from "./inputBox";
import { ItemBill } from "./itemBill";
import { ItemTable } from "./itemTable";
import { SaveButton } from "./button";
import { AddProductModal } from "./addProductModal";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

export function DebitNoteCard() {
    const [showModal, setshowModal] = useState<boolean>(false);

    const bill = useSelector((state: any) => state.bill);
    const billData = bill?.data;

    const options = [
        "Globex Corporation",
        "ABC Corboration",
        "Next Level Corporation",
        "Level ( Corporation",
    ];

    const products = [
        {
            product: "Old durbar 750 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Old durbar 375 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Old durbar 175 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Khukuri 750 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Signature 750 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Khukuri 375 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Khukuri 175 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
        {
            product: "Yeti 750 ml",
            rate: 2564.0,
            quantity: 1,
            total: 0,
            discount: 0,
        },
    ];

    const handleKeyPress = () => {
        setshowModal(!showModal);
    };


    return (
        <div className="max-w-[1000px] py-[24px] m-auto ">
            <Header
                heading="New debit note"
                bold={700}
                border={1}
                icon={<AiOutlineClose color={"red"} />}
            />
            <div className="grid grid-cols-2  px-[24px] gap-x-[16px]">
                <Dropdown
                    label="Supplier name"
                    type="text"
                    placeholder="Eg:Globex Corporation"
                    options={options}
                    required={true}
                />
                <InputBox label="Date" type="date" required={true} />
                <InputBox
                    label="Reference"
                    type="text"
                    placeholder="Enter Reference"
                    required={true}
                />
            </div>
            <div className="px-[24px]">
                <ItemTable data={billData} />
                <button
                    className="outline-none text-[12px] pl-[16px] h-[50px] text-[#979797]"
                    onClick={handleKeyPress}
                >
                    Add code or product
                </button>
                <div className="absolute">
                    {showModal && <AddProductModal products={products} />}
                </div>
            </div>
            {billData?.length !== 0 ? (
                <div className="grid grid-cols-2 px-[24px] py-[16px] gap-[64px]">
                    <TextArea
                        label="Note"
                        placeholder="Enter Notes"
                        note="*This will appear on print"
                        required={false}
                    />
                    <ItemBill />
                </div>
            ) : (
                ""
            )}

            <div className=" h-[80px] px-[24px]  ">
                <Header
                    heading="Custom fields"
                    bold={400}
                    border={2}
                    icon={<BsChevronRight />}
                />
                <TextArea
                    label="Terms & conditions"
                    placeholder="Enter Notes"
                    required={false}
                />
                <div className="flex justify-end">
                    <SaveButton bold={700} />
                </div>
            </div>
        </div>
    );
}
