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


interface CarInvoice {
    model?:string;
    make?:string;
    totalPrice?:number;
    discount?:number;
}
type carRequired = Required<CarInvoice>;

function carPurchase(car: carRequired) {
    console.log(car);
}

// carPurchase({ model: "i20", totalPrice: 20000, discount: 1000 });
// above line will error like :
// Argument of type '{ model: string; totalPrice: number; discount: number; }' is not assignable to parameter of type 'Required<CarInvoice>'.