const MealDetailsPage = async ({ params }) => {
  const { mealSlug } = await params;

  return (
    <main>
      <h1>Meal Details</h1>
      <p>{mealSlug}</p>
    </main>
  );
};

export default MealDetailsPage;
