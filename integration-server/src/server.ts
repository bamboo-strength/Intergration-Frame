import app from './core/app';
import { PORT } from './utils/global-variable';

app.listen(PORT, () => {
    console.log(`express server listenering on port ${PORT}`);
})