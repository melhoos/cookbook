import apiUrl from '../../utilities/urls';
import {Service, ConnectionStatus} from '../../utilities/dataService';
import Recipe from '../../models/recipe.model';

export async function getRecipes(): Promise<Service<Recipe[]>> {
    return await fetch(`${apiUrl}/recipes`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Recipe[]) => {
            const result: Service<Recipe[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Recipe[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function getRecipeById(id: string): Promise<Service<Recipe>> {
    return await fetch(`${apiUrl}/recipe/${id}`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Recipe) => {
            const result: Service<Recipe> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Recipe> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}