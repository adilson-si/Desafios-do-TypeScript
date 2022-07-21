// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// employee.code = 10;
// employee.name = "John";

let employee = {
    code: 1,
    name: "Adilson"
}; //aqui usando inferência de tipo

let employee2: {code: number, name: string} = {
    code: 2,
    name: "Michele"
} // aqui usando notação de tipo

