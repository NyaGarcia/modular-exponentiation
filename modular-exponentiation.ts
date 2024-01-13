function modularExponentiation(base: bigint, exponent: bigint, modulus: bigint) {

    // Se inicializa el resultado
    let result = 1n;

    // Se generan variables locales para evitar la mutación de los argumentos
    let b = base;
    let e = exponent;

    // Se calcula: base (mod módulo)
    b = base % modulus;

    // El bucle se ejecuta tantas veces como dígitos binarios haya
    while (e > 0) {
        // Se calcula el bit menos significativo
        const leastSignificantBit = e % 2n;

        // Se ejecuta solo si el bit menos significativo es 1
        if (leastSignificantBit == 1n) {
            // Se multiplica el resultado por la base y se asigna al resultado
            result = result * b;
            // Al cálculo anterior se le aplica la operación módulo y se asigna al resultado
            result = result % modulus;
        }

        e = e / 2n;

        // Se eleva al cuadrado la base
        b = b * b;
        // Y se le aplica la operación módulo
        b = b % modulus;
    }

    // Se devuelve el resultado
    return result;
}

console.log(modularExponentiation(4n, 13n, 497n));
console.log(modularExponentiation(2n, 16n, 341n));