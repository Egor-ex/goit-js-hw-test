import Joi from 'joi'

const passScheam = Joi.string().min(3).max(10)

export default function validPass(password) {
    return passScheam.validate(password);
}