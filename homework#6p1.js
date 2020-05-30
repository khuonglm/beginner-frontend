const getInput = (input) => {
    return document.getElementById(input).value
}

function Print() {
    let n = getInput('input')
    if(n < 2 || n > 50) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    let ans = ""
    for(let i = 1; i <= n; ++i) {
        for(let j = 1; j <= i; ++j) {
            ans += '*'
        }
        ans += "<br>"
    }
    document.getElementById('print').innerHTML = ans
}
