export interface RecipeType {
  _id: string;
  name: string;
  introduction: string;
  preparationTime: number;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  difficulty: string[];
  tags: string;
  createdAt: Date;
  userId: string;
  mealPlan: string;
  category: string;
}
