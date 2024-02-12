// taskMiddleware.js

const validadeTitle = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) {
        return res
            .status(400)
            .json({ message: 'The field "Title" is required.' });
    }

    if (body.title == "") {
        return res.status(400).json({ message: "Title cannot be empty." });
    }

    next();
};

const validadeStatus = (req, res, next) => {
    const { body } = req;

    if (body.status == undefined) {
        return res
            .status(400)
            .json({ message: 'The field "Status" is required.' });
    }

    if (body.title == "") {
        return res.status(400).json({ message: "Status cannot be empty." });
    }

    next();
};

module.exports = {
    validadeTitle,
    validadeStatus,
};
