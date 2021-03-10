/**
 * @param {string} username
 * @return {Object}
 */
async function asyncAwait(username) {
    if (await isAdmin(username)) {
        return await getAdminData();
    }
    return await getGuestData();
}

/**
 * @param {string} username
 * @return {Promise}
 */
function promise(username) {
    // ...
}
