let show = document.getElementById('display')
// let result=0;
let opt = "";
let firstValue = "";

let lastValue = "";

function CalculatedValue(value) {
    console.log(value)
    if (opt.length === 0) {
        // console.log(value)
        firstValue += value
        show.value = firstValue
    }
    else {
        lastValue += value
        show.value += value
    }
    console.log(firstValue, opt, lastValue)
}






function operator(abc) {

    show.value += abc
    // console.log(opt.length)
    opt = abc
    // console.log(opt.length)

}

function output() {
    let result = 0;
    if (opt === "+") {
        result = Number(firstValue) + Number(lastValue)
    }

    else if (opt === "-") {
        result = Number(firstValue) - Number(lastValue)
    }

    else if (opt === "*") {
        result = Number(firstValue) * Number(lastValue)
    }

    else if (opt === "/") {
        result = Number(firstValue) / Number(lastValue)
    }

    else {
    }
    show.value = result;
    firstValue=result
    lastValue=""
    opt=""
}

function Clear() {
    show.value = 0
    firstValue = ""
    lastValue = ""
    opt = ""
}



