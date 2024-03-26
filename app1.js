function calculateKMI() {
    let svoris = parseFloat(document.getElementById('svoris').value);
    let ugis = parseFloat(document.getElementById('ugis').value) / 100; // Ūgis paverstas i metrus

    if (svoris > 0 && ugis > 0) {
        let kmi = svoris / (ugis * ugis);
        document.getElementById('kmiVerte').textContent = kmi.toFixed(2);

        let interpretation = getInterpretation(kmi);
        document.getElementById('ivertinti').textContent = ivertinti;
    } else {
        document.getElementById('kmiverte').textContent = '-';
        document.getElementById('ivertinti').textContent = 'Įveskite teisingus duomenis.';
    }
}
