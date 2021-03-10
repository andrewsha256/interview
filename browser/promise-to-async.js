/**
 * @param {string} username
 * @return {Promise}
 */
function promise(username) {
    return isAdmin(username).then((isAdmin) => {
        if (isAdmin) {
            return getAdminData().then((adminData) => adminData);
        }
        return getGuestData().then((guestData) => guestData);
    });
}

async function asyncAwait(username) {
    // ...
}
