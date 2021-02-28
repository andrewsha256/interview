const express = require('express');

/**
 * Controller factory that returns data for user.
 * For admins it adds some extra data.
 *
 * @param {Object} param
 * @param {function} param.checkAdmin checks that user is admin
 * @param {function} param.asyncDatabaseProcess async database call
 * @param {function} param.asyncAdminProcess async process only for admins
 * @return {import('express').Router}
 */
const routerFactory = function ({
    checkAdmin,
    asyncDatabaseProcess,
    asyncAdminProcess,
}) {
    const router = express.Router();

    let isAdmin = false;

    // checks for admin
    router.all('/*', async (req, res, next) => {
        isAdmin = await checkAdmin(req);
        next();
    });

    // handles data
    router.get('/data', async function (req, res, next) {
        const query = req.query;

        const data = await asyncDatabaseProcess(query);

        if (isAdmin) {
            const adminData = await asyncAdminProcess();
            data['adminData'] = adminData;
        }

        res.send(data);
    });

    // handles /data_1
    router.get('/data_1', async function (req, res, next) {
        if (isAdmin) {
            // ...
        } else {
            // ...
        }
        res.send({});
    });

    // handles /data_2
    router.get('/data_2', async function (req, res, next) {
        if (isAdmin) {
            // ...
        }
        res.send({});
    });

    return router;
};

module.exports = routerFactory;
