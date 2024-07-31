"use client";

import React from "react";
import { useProductStore } from "@/store";
import DataTable from "@/components/DataTable";
import { columns } from "./columns"
import Link from "next/link";

export function Loader() {
    return (
        <span className="loading loading-dots loading-lg m-auto block" />
    )
}
export default function TableContainer() {
    const {loading, products} = useProductStore();

    const columnsRef = React.useMemo(() => columns,[]);
    const options = React.useMemo(() => ({
        enableRowActions: true,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        paginationDisplayMode: 'pages',
        mantinePaginationProps: {
            showRowsPerPage: false,
        },
        renderRowActions: ({ row }: any) => (
        <Link href={`/products/${row.original.id}`}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </Link>
        ),
    }),[]);


    if(loading) { return <Loader />};

    return (
        <DataTable data={products} columns={columnsRef} options={options} />
    )
}