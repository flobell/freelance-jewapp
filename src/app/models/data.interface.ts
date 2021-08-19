import { Category } from './category.interface';
import { Subcategory } from  './subcategory.interface';
import { Business } from './business.interface';

export interface Data {
    status: string;
    category: Category[];
    business: Business[];
    subcategory: Subcategory[];
    
}