const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  const { productId, reviewId } = await params;
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
