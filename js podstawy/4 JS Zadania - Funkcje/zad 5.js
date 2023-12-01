function fn(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi < 18.5) {
        console.log(`Niedowaga wynik to: ${bmi}`);
    } else if (bmi >= 25) {
        console.log(`Nadwaga wynik to: ${bmi}`);
    } else {
        console.log(`Normalna waga wynik to: ${bmi}`);
    }
} 

fn(65, 1.75);