const checkAdmin = function ({ query }) {
    return query.hasOwnProperty('login') && query.login === 'admin';
};

const asyncDatabaseProcess = async function ({ login }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                login,
            });
        }, Math.random() * 3000);
    });
};

const asyncAdminProcess = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                isAdmin: true,
            });
        }, Math.random() * 1000);
    });
};

module.exports = {
    checkAdmin,
    asyncDatabaseProcess,
    asyncAdminProcess,
};
