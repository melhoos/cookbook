import apiUrl from '../../../utility/connectAPI';
import {Service, ConnectionStatus} from '../../../utility/dataService';
import IngredientCategory from '../../../models/ingredientCategory.model';

export async function getIngredientCategories(): Promise<Service<IngredientCategory[]>> {
    return await fetch(`${apiUrl}/ingredientCategories`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: IngredientCategory[]) => {
            const result: Service<IngredientCategory[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<IngredientCategory[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function postIngredientCategorie(newIngredientCategory: string): Promise<Service<IngredientCategory[]>> {
    return await fetch(`${apiUrl}/ingredientCategory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({IngredientCategoryName: newIngredientCategory})
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: IngredientCategory[]) => {
            const result: Service<IngredientCategory[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<IngredientCategory[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function deleteIngredientCategorie(ingredientCategoryId: number): Promise<Service<IngredientCategory[]>>{
    return await fetch(`${apiUrl}/ingredientCategory/${ingredientCategoryId}`, {
        method: 'DELETE',
    })
    .then((response: Response) => {
        if (response.ok) return response.json()
        else throw new Error(`Error: ${response.statusText}`)
    })
    .then((response: IngredientCategory[]) => {
        const result: Service<IngredientCategory[]> = {status: ConnectionStatus.SUCCESS, payload: response}
        return result
    })
    .catch((error: Error) => {
        const errorResult: Service<IngredientCategory[]> = {status: ConnectionStatus.ERROR, error}
        return errorResult
    })
} 
