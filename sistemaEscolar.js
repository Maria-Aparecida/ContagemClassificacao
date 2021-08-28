let numeroDeAluno = 10;

let contador = 1;
/*while (contador <= numeroDeAluno) {
    if(contador == 0){
        console.log ("O número atual é zero")
    }else if (contador %2 ==0) {
        console.log("Número: "+ contador+ " é par")
    }else
        console.log("Número: "+ contador+ " é ímpar")
    contador++;
    //console.log("Contador "+contador)
    
}*/

    do {
       
        if(contador == 0){
            console.log ("O número atual é zero")
         }else if (contador %2 ==1) {
            console.log("Número: "+ contador+ " é ímpar")
        }else {
         console.log("Número: "+ contador+ " é par")
        }
        contador ++
    } while ((contador <= numeroDeAluno));

  
for (let contador = 0; contador <= numeroDeAluno ; contador++){
   //console.log(contador)
   if (contador == 0) {
       console.log("Número é zero");
   }else if (contador % 2 == 0) {
       console.log("Número é par: "+contador);
       
    } else{
        console.log("Número é ímpar: "+contador)
   }
}

    let listaDeAlunos = ["Marcelo","Maria","Nádia", "Ana"]
    for (const aluno of listaDeAlunos ){
     console.log(aluno)
}
    listaDeAlunos.forEach
    listaDeAlunos.forEach(item => {
    console.log(item)
});