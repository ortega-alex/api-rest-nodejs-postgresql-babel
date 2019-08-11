import app from './app';

async function main() {
    await app.listen(3000);
    console.log('server on por 3000');
};

main();