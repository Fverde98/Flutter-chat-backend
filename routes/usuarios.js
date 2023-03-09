const {Router } = require ('express');
const { getUsuario } = require('../controllers/usuarios');

const { validarJWT} = require('../middlewares/validar-jwt')

const router = Router();

router.get('/', validarJWT, getUsuario);

module.exports = router;