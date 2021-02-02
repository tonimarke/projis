import app from './app';

const PORT = 3333;

// app.listen(PORT, () => {
//   console.log(`Server is runing at port ${PORT}`);
// });

import bancoDeDados from ('./config/database');
bancoDeDados('mongodb://localhost:27017/projisDB')