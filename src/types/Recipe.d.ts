export interface RecipeType {
  id: string;
  title: string;
  description: string;
  ingredients: sting[];
  preparation_steps: sting[];
  time_required: string;
  difficulty: string[];
  tags: string[];
  category: string[];
  image_url: string;
  createdAt: Date;
  ServingSize: sting[];
  nutrition: sting[];
}
