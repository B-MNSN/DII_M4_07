const newText = 'not ok';
let allFlexItem = document.getElementsByClassName('flex-item')
for (i = 0; i < allFlexItem.length; i++) {
    allFlexItem[i].innerHTML = newText;
}