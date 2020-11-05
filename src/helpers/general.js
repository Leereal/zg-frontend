export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;
    
        if(requiresAuth && !currentUser) {
            next('/login');
        } else if(to.path == '/login' && currentUser) {
            next('/dashboard');
        } 
        else if(to.path == '/register' && currentUser) {
            next('/dashboard');
        }
        else if(to.path == '/home' && currentUser) {
            next('/dashboard');
        }
        else if(to.path == '/' && currentUser) {
            next('/dashboard');
        }
        else if(to.path == '/password-reset' && currentUser) {
            next('/dashboard');
        }
        else {
            next();
        }
    });
    
    axios.interceptors.response.use(null, (error) => {
        if (error.response.status == 401) {
            store.commit('logout');
            if (router.currentRoute.name !== 'login') {
                router.push({ name: 'login' }).catch(() => {});
            }
        }

        return Promise.reject(error);
    });

    if (store.getters.currentUser) {
        setAuthorization(store.getters.currentUser.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}