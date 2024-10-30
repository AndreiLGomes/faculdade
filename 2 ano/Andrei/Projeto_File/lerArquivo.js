import { appendFile, writeFile, rename, unlink,  } from 'fs';

appendFile('novo.txt', 'Olá Node.JS! UNISENAI 2023', function (err) { // cria um arquivo
if (err) throw err;
console.log('Arquivo Salvo!');
});

writeFile('novo.txt', 'Olá Node.JS! Andrei o gostosao', function (err) { // atuliza um arquivo
    if (err) throw err;
    console.log('Arquivo atualizado com sucesso!');
});

rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo renomeado com sucesso!');
});

unlink('ArquivoNovoRenomeado.txt', function(err) {
    if (err) throw err;
    console.log('Arquivo excluído com sucesso!');
});