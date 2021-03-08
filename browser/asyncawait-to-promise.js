async function asyncAwait(isAdmin) {
    if (await checkAdmin(isAdmin)) {
        return await getData();
    }
    return {};
}

/**
 * @param {string} username
 * @return {Promise}
 */
function promise(username) {
    // ...
}
