type Props = {
    productName: string,
    publishedAt: Date
};

export default function ProductBadge({productName, publishedAt}: Props) {
    const isNew = Date.now() - new Date(publishedAt).getTime() < 1000 * 60 * 60 * 24 * 7;
    return (<span>{productName} {isNew && <div className="badge badge-secondary">NEW</div>}</span>)
}
