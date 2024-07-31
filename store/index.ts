import { create } from 'zustand';

import type { Product } from '@prisma/client';

type ProductStore = {
    loading: boolean,
    products: Product[],
    add: (products: Product[]) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    loading: true,
    products: [],
    add: (data: Product[]) => set((state) => ({ products: [...data], loading: false })),
}));