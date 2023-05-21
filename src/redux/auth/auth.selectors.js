export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsUpdating = state => state.auth.isUpdating;

export const selectUser = state => state.auth.user;

export const selectTheme = state => state.auth.theme;
export const selectToken = state => state.auth.token;
