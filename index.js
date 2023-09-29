const fs = require('fs');

try {
    const archivo1 = fs.readFileSync(process.env.INPUT_ARCHIVO1, 'utf-8');
    const archivo2 = fs.readFileSync(process.env.INPUT_ARCHIVO2, 'utf-8');

    const objeto1 = JSON.parse(archivo1);
    const objeto2 = JSON.parse(archivo2);

    const sonIguales = JSON.stringify(objeto1) === JSON.stringify(objeto2);

    if (sonIguales) {
        console.log('Los archivos JSON son iguales.');
        process.exit(0);
    } else {
        console.log('Los archivos JSON son diferentes.');
        process.exit(1);
    }
} catch (error) {
    console.error('Error al comparar los archivos JSON:', error);
    process.exit(1);
}
