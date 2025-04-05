interface Car {
    model: string;
    make: string;
    VIN: number;
    isEV: boolean
}

function carService(car: Car) {
    console.log(car);
}

carService({ model: "i20", make: "hyundai", VIN: 123456, isEV: false });

type carPartial = Partial<Car>;

function carSale(car: carPartial) {
    console.log(car);
}

carSale({make:"VW"})