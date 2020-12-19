// in src/authProvider.js

/*
let userIdentity = {};

const authProvider = {
    login: ({ username, password }) => {
        // call the login endpoint, which returns id, fullName, avatar
        // ...
        // and store it in the closure
        userIdentity = { id, fullName, avatar };
    },
    getIdentity: () => {
        return userIdentity;
    }
    // ...
};
*/
const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('https://ondemand.soluspay.net/admin/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    },
    checkAuth: () => localStorage.getItem('token')
    ? Promise.resolve()
    : Promise.reject(),
    logout: ()=> {localStorage.removeItem("token");
    return Promise.resolve();},
    getPermissions: () => localStorage.getItem('token')
    ? Promise.resolve()
    : Promise.reject(),
    
};

export default authProvider;