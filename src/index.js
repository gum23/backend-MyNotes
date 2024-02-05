import {app, PORT} from './app.js';
import './database.js';


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})