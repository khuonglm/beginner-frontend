const getInput = (input) => {
    return document.getElementById(input).value
}

function showInfo() {
    let yourName = getInput('yourname')
    let yourGmail = getInput('yourgmail')
    let yourphone = getInput('phonenumber')
    let message = getInput('message')
    alert("Your name: " + yourName + "\nYour gmail: " + yourGmail + 
          "\nPhone number: " + yourphone + "\nMessage: " + message)
}
