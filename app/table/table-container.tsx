"use client";

import React from "react";
import { useProductStore } from "@/store";
import DataTable from "@/components/DataTable";
import { columns } from "./columns"
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

export default function TableContainer() {
    const {loading, products} = useProductStore();
    const router = useRouter();

    const columnsRef = React.useMemo(() => columns,[]);
    const options = React.useMemo(() => ({
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        paginationDisplayMode: 'pages',
        mantinePaginationProps: {
            showRowsPerPage: false,
        },
        mantineTableBodyRowProps: ({ row }: any) => ({
            onClick: () => router.push(`/products/${row.original.id}`),
            sx: { cursor: 'pointer' },
        }),
    }),[]);


    if(loading) { return <Loader />};

    return (
        <DataTable data={products} columns={columnsRef} options={options} />
    )
}
