import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
    if(!children) return null;

    return <p className="text-red-500 text-xs italic mb-3">{children}</p>
}
