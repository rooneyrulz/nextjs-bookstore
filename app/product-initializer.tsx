"use client"

import React from "react"
import { Product } from "@prisma/client";
import { useProductStore } from "@/store";

type Props = {
    products: Product[];
    children: React.ReactNode
};

export default function ProductInitializer({ products, children }: Props) {
    const {add} = useProductStore();

    React.useEffect(() => {
        add(products);
    }, []);

    return (
        <>
            {children}
        </>
    );
}