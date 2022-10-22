var shoes = {
    name: "adidas",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var anam = {
    name: 'Anam',
    id: 123,
    email: "anamrani17arid529@gmail.com",
    level: "inter",
    languages: ["undr", 'english']
};
console.log(anam);
