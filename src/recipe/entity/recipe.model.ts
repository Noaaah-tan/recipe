export interface Recipe {
    Recipe_id: string;
    recipe_Title: string;
    recipe_Description: string;
    status: RecipeStatus;
}

export enum RecipeStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    
} 