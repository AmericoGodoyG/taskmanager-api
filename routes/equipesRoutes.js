const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { isAdmin } = require('../middlewares/roles');
const equipeController = require('../controllers/equipeController');
const authMiddleware = require('../middlewares/authMiddleware');

// Middleware: autenticado + admin
router.use(auth, isAdmin);

router.post('/', equipeController.criarEquipe);
router.get('/', equipeController.listarEquipes);
router.get('/:id', equipeController.obterEquipe);
router.put('/:id', equipeController.editarEquipe);
router.delete('/:id', equipeController.excluirEquipe);
router.get("/:id/alunos", authMiddleware, equipeController.getAlunosDaEquipe);

module.exports = router;
