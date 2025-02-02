// import { rootReducer } from "../../src/store/reducers";
// import * as storeModule from "../../src/store/store";

// // Mock store oluştur
// export const mockStore = configureStore({
//   reducer: rootReducer,
//   preloadedState: {
//     employees: [],
//     viewMode: "table",
//     language: "en",
//   },
// });

// // Reset fonksiyonu
// export const resetStore = () => {
//   mockStore.dispatch({ type: "SET_VIEW_MODE", payload: "table" });
// };

// // Jasmine ile store'u mock'la
// spyOnProperty(storeModule, "store", "get").and.returnValue(mockStore);
