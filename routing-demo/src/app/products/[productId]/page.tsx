export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product Detail {params.productId}</h1>;
}
