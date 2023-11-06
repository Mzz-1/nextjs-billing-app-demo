import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillItem {
    product: string;
    rate: number;
    quantity: number;
    discount: number;
    total: number;
}

interface BillState {
    data: BillItem[];
    totalDiscount: number;
    totalAmount: number;
    grandTotal:number;
}

const initialState: BillState = {
    data: [],
    totalDiscount: 0,
    totalAmount: 0,
    grandTotal:0
};

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BillItem>) => {
            const newItem = action.payload;
            const existingItem = state.data.find(
                (item) => item.product === newItem.product
            );

            if (existingItem) {
                existingItem.quantity += 1;

                existingItem.discount = Math.floor(
                    existingItem.rate * existingItem.quantity * 0.1
                );

                existingItem.total = Math.floor(
                    existingItem.rate * existingItem.quantity -
                        existingItem.discount
                );
            } else {
                newItem.total = newItem.rate * newItem.quantity;
                newItem.discount = Math.floor(
                    newItem.rate * newItem.quantity * 0.1
                );
                newItem.total = Math.floor(
                    newItem.rate * newItem.quantity - newItem.discount
                );
                state.data.push(newItem);
            }
            const discount = state.data.reduce(
                (total, item) => total + item.discount,
                0
            );
            state.totalDiscount = Math.floor(discount);
            const total = state.data.reduce(
                (total, item) => total + item.total,
                0
            );
            state.totalAmount = Math.floor(total);
        },

        removeItem: (state, action: PayloadAction<String>) => {
            const removedItemIndex = state.data.findIndex(
                (item) => item.product === action.payload
            );

            if (removedItemIndex !== -1) {
                const removedItem = state.data[removedItemIndex];

                state.totalAmount -= removedItem.total;

                state.data.splice(removedItemIndex, 1);

                state.totalDiscount = state.data.reduce(
                    (total, item) => total + item.discount,
                    0
                );
            }
        },
    },
});

export const { addItem, removeItem } = billSlice.actions;
export default billSlice;
