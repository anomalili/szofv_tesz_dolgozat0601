/*  function megfordit(megforditandoSzo) {
  // var megforditottSzo = reverse(megforditandoSzo);

  var daraboltSzo = megforditandoSzo.split('');
  console.log(daraboltSzo);
  var visszafordit = daraboltSzo.reverse();
  console.log(visszafordit);
  var tombberakva = visszafordit.join = ('');
    console.log(tombberakva);
  var megforditva = tombberakva.toString(); 


  return megforditva;
}   */
 function megfordit(megforditandoSzo) {
    console.log(megforditandoSzo);
    return megforditandoSzo
      .split('')
      .reverse()
      .join('');
      
  } 
