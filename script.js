function alert1() {
    alert('let me see ...');
}
let ok = document.getElementById('ok');
// ok.addEventListener('click', alert1)
ok.addEventListener('click', function() {
    alert1('let me see ...');
});
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => alert('let me see ...'));