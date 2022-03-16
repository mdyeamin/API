
const maComming = () => {
    alert('comming ma! open tha book')
}

const askPicnic = () => {
    const respons = confirm('are you goin to picnic?')

    if (respons === true) {
        alert('taka bkash kore de');
    }
    else {
        console.log('DGM!!');
    }
}

askName = () => {
    const name = prompt('what is your name?')
    if (name) {
        console.log(name);
    }
}