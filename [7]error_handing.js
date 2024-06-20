function IntegerNumber(number) {
    if (isNaN(number)) {
        throw new Error("Ошибка!");
    } else if (number % 1 > 0) {
        throw new Error("Не целое число!");
    } else {
        console.log(number);
    }
}

IntegerNumber("SAD")