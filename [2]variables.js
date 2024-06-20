function example() {
    var varVariable = "var доступна везде";

    {
      let letVariable = "let доступна только внутри блока";
  
      const constVariable = "const доступна только внутри блока";

      console.log(varVariable); // Доступно
      console.log(letVariable); // Доступно
      console.log(constVariable); // Доступно
    }

    console.log(varVariable); // Доступно
    console.log(letVariable); // Ошибка: letVariable не определена
    console.log(constVariable); // Ошибка: constVariable не определена
  }
  
  example();