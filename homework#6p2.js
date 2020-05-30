
const getInput = (input) => {
    return document.getElementById(input).value
}

function solve() {
    let a = getInput('a'), b = getInput('b'), c = getInput('c')
    let delta = b * b - 4 * a * c
    if(delta < 0) {
       document.getElementById('ans').innerText = "no solution"
       return
    }
    delta = Math.sqrt(delta)
    if(delta == 0) {
       let x = (delta - b) / (2 * a)
       document.getElementById('ans').innerText = "x1 = x2 = " + x 
       return
    }
    let x1 = (delta - b) / (2 * a)
    let x2 = (-delta - b) / (2 * a)
    document.getElementById('ans').innerHTML = "x1 = " + x1.toFixed(5) + "<br>x2 = " + x2.toFixed(5)
}
