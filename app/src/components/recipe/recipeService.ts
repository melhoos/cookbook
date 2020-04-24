import apiUrl from '../../utilities/urls';
import {Service, ConnectionStatus} from '../../utilities/dataService';
import FullRecipe from '../../models/fullRecipe.model';

export async function getFullRecipeById(id: number): Promise<Service<FullRecipe>> {
    return await fetch(`${apiUrl}/fullRecipe/${id}`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: FullRecipe) => {
            const result: Service<FullRecipe> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<FullRecipe> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}
