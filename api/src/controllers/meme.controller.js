import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
    helpers.getAll('meme', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
    const nombre = req.params.nombre;
    helpers.getAll('meme', { nombre: nombre }, req, res);
});

router.post('/', async function (req, res) {
    const meme = req.query;
    console.log(meme);
    helpers.insert('meme', meme, req, res);
});

router.put('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const datos = req.body;
    helpers.update('meme', { id: id }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    helpers.delete('meme', { id: id }, req, res);
});

export default router;