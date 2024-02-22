import app from './app.js';
import { PORT } from './config/envs.js';


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
