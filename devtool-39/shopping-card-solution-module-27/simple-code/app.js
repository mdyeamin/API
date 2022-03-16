document.getElementById('case-plus').addEventListener('click', function () {
    const caseInputn = document.getElementById('case-number')
    const caseNumber = caseInputn.value;
    caseInputn.value = parseInt(caseNumber) + 1;
});


document.getElementById('case-minus').addEventListener('click', function () {
    const caseInputn = document.getElementById('case-number');
    const caseNumber = caseInputn.value;
    caseInputn.value = parseInt(caseNumber) - 1;
})