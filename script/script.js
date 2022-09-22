
const calc = document.querySelector(".calc__btn")
const inputSom = document.querySelector("#som")
const inputDollars = document.querySelector("#dollar")
const summer = document.querySelector(".summer");

let reg = /[A-zА-яЁё]/g;

inputSom.oninput = function () {
        this.value = this.value.replace(reg, '')
}

inputDollars.oninput = function () {
        this.value = this.value.replace(reg, '')
}

calc.addEventListener("click", () => {
        summer.innerText = Math.ceil((inputSom.value.replace(/,/, ".") * inputDollars.value.replace(/,/, ".")) * 100) / 100

})

