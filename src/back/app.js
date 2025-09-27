import {} from 'express';
import express from 'express';
import path from 'node:path';
const dirname = path.resolve();
const PORT = 3000;
const app = express();
app.use(express.static(path.join(dirname, 'dist/javascript/')));
app.use(express.static(path.join(dirname, 'src/styles/')));
app.use(express.static(path.join(dirname, 'src/assets/')));
app.use(express.static(path.join(dirname, 'public/')));
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'src/pages/index.html'));
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map