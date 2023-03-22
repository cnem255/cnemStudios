var count = 0;

function onload(btn) {
    btn.textContent = `Count: ${count}`;
}

function clicked(btn) {
    count++;
    btn.textContent = `Count: ${count}`;
}