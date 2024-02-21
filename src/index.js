import app from './app.js';
import { PORT } from './config/envs.js';
import { swaggerDocs } from './doc.js';

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT} 🚀`);
    swaggerDocs(app);
});
