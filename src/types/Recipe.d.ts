import { url } from "inspector";

export interface RecipeType {

    id: string; // Unique identifier for the recipe
    title: string; // Title of the recipe
    description: string; // Description of the recipe
    ingredients: String[]; // Array of ingredients
    preparation_steps:String[]
    time_required: string; // the time needed 
    difficulty:string[];
    tags:string[]; //Vegeterain,....
    category:string[]; // Category of the recipe (e.g., Appetizer, Main Course, Dessert)
    image_url: string; // URL of the recipe image
    createdAt: Date; // Date when the recipe was created
    ServingSize:String[]// 
    nutrition:String[]//
  }

  
  export interface RatingType {
    rate: number;
    count: number;
  }
  
 