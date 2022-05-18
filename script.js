function alert1() {
    alert('let me see ...');
}
let ok = document.getElementById('ok');
ok.addEventListener('click', function() {
    alert1('let me see ...');
});
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => alert('not ok ...'));

let showDate = document.getElementById('showDate');
showDate.addEventListener('click', function(e) {
    document.getElementById('emptySpace').innerHTML = "<b>" + Date() + "</b>";
});
showDate.addEventListener('dblclick', function(e) {
    document.getElementById('emptySpace').innerHTML = '';
});