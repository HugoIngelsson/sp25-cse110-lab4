let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const carName in statistics) {
    if (carName[0] == 'r' || statistics[carName] % 2 == 1) {
        console.log(statistics[carName]);
    }
}