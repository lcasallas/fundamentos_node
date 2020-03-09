function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((error, dato) => {
  if (error) {
    console.error('tenemos un error');
    console.error(error);
    return false;
    // throw error; //NO FUNCIONA
  }

  console.log('todo ha ido bien mi data es', dato);
});
