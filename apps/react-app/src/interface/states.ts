export interface IOrganizationState {
  currentOrganization: string | null;
}

export type TOrganizationAction =
  // | { type: 'SET_LOADING'; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_CURRENT_ORGANIZATION"; payload: string | null }
  // | { type: 'SET_ORGANIZATIONS'; payload: IOrganization[] }
  // | { type: 'ADD_ORGANIZATION'; payload: IOrganization }
  // | { type: 'UPDATE_ORGANIZATION'; payload: { id: string; updates: Partial<IOrganization> } }
  // | { type: 'REMOVE_ORGANIZATION'; payload: string }
  | { type: "CLEAR_DATA" };
