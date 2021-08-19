import { Category } from './category.interface';
import { Community } from './community.interface';
import { Pregunta } from './pregunta.interface';
import { Data } from  './data.interface';

export interface JsonData {
    message: string;

    comunidades: Community[];
    preguntas: Pregunta[];

    access_token: string;
    token_type: string;
    expires_at: string;

    data: Data;
    category: Category[];
    
}