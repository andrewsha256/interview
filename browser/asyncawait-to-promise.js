/**
 * @param {string} username
 * @return {Object}
 */
async function asyncAwait(username) {
    if (await checkAdmin(username)) {
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
