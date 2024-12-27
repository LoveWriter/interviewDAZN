const Joi = require('joi');


const validateBody = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        genre: Joi.string().required(),
        rating: Joi.number().min(0).max(10).required(),
        streamingLink: Joi.string().uri().required(),
    });
    const {error} = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        next();
    }
}

const validateParams = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().required()
    });
    const {error} = schema.validate(req.params, {abortEarly: false});
    if (error) {
        return res.status(400).json({
            message: 'Parameter Validation Error',
            params: req.params,
        });
    }
    next();
};

const validateQuery = (req, res, next) => {
    const schema = Joi.object({
        q: Joi.string().required()
    });

    const {error} = schema.validate(req.query);
    if (error) {
        return res.status(400).json({
            message: 'Query Parameter Validation Error',
            query: req.query,
        });
    }
    next();
};

const validateSigner = (req, res, next) => {
    const schema = Joi.object({
        signer: Joi.string().required()
    });
    const {error} = schema.validate(req.query, {abortEarly: false});
    if (error) {
        return res.status(400).json({
            message: 'Query Parameter signer Validation Error',
            query: req.query,
        });
    }
    next();
};

module.exports = {
    validateBody,
    validateParams,
    validateQuery,
    validateSigner
};