function promise(username) {
    return checkAdmin(username).then((isAdmin) => {
        if (isAdmin) {
            return getData();
        }
        return {};
    });
}

/**
 * @param {string} login
 * @return {Object}
 */
async function asyncAwait(login) {
    // return ...
}
