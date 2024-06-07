document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let isXTurn = true;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = isXTurn ? 'X' : 'O';
                cell.classList.add(isXTurn ? 'X' : 'O');
                isXTurn = !isXTurn;
            }
        });
    });
});
