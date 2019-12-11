if (process.argv[0] == '-bp') {
  console.log('Warning: Overriding Process!')
} else {
  if (process.platform == 'darwin') {
    console.log('Estas usando un SO: MacOS');
  } else if (process.platform == 'linux') {
    console.log('Estas usando un SO: Linux');
  } else if (process.platform == 'win32') {
    console.log('Estas usando un SO: Windows');
  } else console.log('No se que SO estas usando');
}



console.log('------------------');
// var argv = process.argv.push(1, 2, 3, 4, 5);
// console.log(process.argv);
