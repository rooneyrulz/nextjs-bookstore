import { formatPrice } from "@/lib/format";

interface Props {
  price: number;
  className: string;
}

export default function PriceTag({ price, className }: Props) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
