import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
    res.send('Homepage');
});

router.get('/about', (_, res) => {
    res.send('About page');
});

router.get('/hello/:name?', (req, res) => {
  const { name = 'stranger' } = req.params;
  const { lang } = req.query;
  if (lang === 'id') {
    return res.send(`Hai, ${name}!`);
}
  res.send(`Hello, ${name}!`);
});

router.all('/', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersebut');
});

router.all('/about', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersebut');
});

router.use((_, res) => {
    res.send('Halaman tidak ditemukan');
});

export default router;  