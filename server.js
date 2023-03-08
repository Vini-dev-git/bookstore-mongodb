const port = process.env.PORT || 3000;

import app from './src/app.js'

app.listen(port, ()=>{
    console.log(`Server listening on port 3000 in http://localhost:${port}`);
})
