function varstaVot(yearsOld){
    // if (yearsOld >= 18){
    //     console.log('Poti vota');
    // }
    // else{
    //     console.log('Nu poti vota')
    // }
    if(isNaN(yearsOld)){
        console.log('Not a number');
        return;
    }
    
    return yearsOld >= 18 ? console.log('Poti vota') :  console.log('Nu poti vota');
}

varstaVot('a');
