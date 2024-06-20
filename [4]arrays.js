function numbArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i] + array[i] * 0.1;
    } 
    console.log(result);
}

numbArray([4324, 2132315, 324325, 43532])
