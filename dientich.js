function get(input) {
    return eval(document.getElementById(input).value);
}
function clear(input) {
    document.getElementById(input).value = ''
}
function GetAns() {
    let ans = (get('length') + get('breadth')) * 2 * get('height')   
    document.getElementById('ans').innerHTML = '<p style = "color: red">' + ans + '</p>'
}
function GetRes() {
    let ans = get('length') * get('breadth') * get('height')
    document.getElementById('ans').innerHTML = '<p style = "color: blue">' + ans + '</p>'
}
function Clear() {
    document.getElementById('ans').innerHTML = ''
    clear('length'), clear('breadth'), clear('height')
}