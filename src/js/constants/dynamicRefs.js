export const dynRefs = (id = 0) => {
    return {
        notLoggedIn: document.getElementById('not-logged-in'),
        loggedIn: document.getElementById('logged-in')
    };
};