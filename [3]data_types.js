function comparison(obj_1, obj_2) {
    const obj_1_type = typeof obj_1;
    const obj_2_type = typeof obj_2;
    if ((obj_1 === 1 || obj_1 === true) && (obj_2 === 1 || obj_2 === true)) {
        console.log("Объекты эквивалентны!");
    }
    else if ((obj_1 === 0 || obj_1 === false) && (obj_2 === 0 || obj_2 === false)) {
        console.log("Объекты эквивалентны!");
    }
    else if ((obj_1 === 0 || obj_1 === null) && (obj_2 === 0 || obj_2 === null)) {
        console.log("Объекты эквивалентны!");
    }
    else if (obj_1_type != obj_2_type) {
        console.log("Объекты не эквивалентны!");
    }
    else {
        console.log("Объекты эквивалентны!");
    }
}

comparison(null, "null")