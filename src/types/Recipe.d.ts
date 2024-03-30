export interface RecipeType {
  _id: string;
  name: string;
  introduction:string;
  description: string;
  preparationTime: number;
  servings: number;
  image: string;
  ingredients: { name: string; quantity: string }[]; // Updated ingredients type
  instructions: string[];
  difficulty: ["easy", "medium", "difficult"];
  tags: string;
  createdAt: Date;
  userId: string;
  mealPlan: string;
  category: string;
}
/* export interface Ingredient {
  name: string;
  quantity: string;
}
 */