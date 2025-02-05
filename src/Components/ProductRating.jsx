export default function ProductRating({ rating }) {
  const rateNum = Math.round(+rating);

  const filledStars = Array(rateNum).fill(<ion-icon name="star" />),
    emptyStars = Array(5 - rateNum).fill(<ion-icon name="star-outline" />);

  return (
    <div className="flex gap-2">
      {filledStars}
      {emptyStars}
    </div>
  );
}
