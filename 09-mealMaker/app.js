let menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            this._meal = mealToCheck;
        } else {
            console.log("You must assign a string to meal!")
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            this._price = priceToCheck
        } else {
            console.log("You must assign a number to price!")
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} for ${this._price}$!`
        } else {
            return "Meal or price was not set correctly!"
        }
    }
}

menu.meal = "hamburger"
menu.price = 7.5

console.log(menu.todaysSpecial)