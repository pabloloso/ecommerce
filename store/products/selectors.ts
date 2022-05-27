import { AppState } from "store/rootReducer";

export const getError = (state: AppState) => state.products.error
export const getIsFetching = (state: AppState) => state.products.isFetching
export const getProducts = (state: AppState) => state.products.products