document.addEventListener('DOMContentLoaded', async function () {

    function deleteSelectedComments() {
        const selectedRows = document.querySelectorAll('#commentsBody input:checked');
        selectedRows.forEach((row) => {
            const commentId = row.dataset.id;
            deleteComment(commentId);
        });
    }

    function createTableRow(comment) {
        const row = document.createElement('tr');
        row.dataset.id = comment.id;
        row.innerHTML = `
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
            <td><button type="button">Delete</button></td>
        `;

        const deleteBtn = row.querySelector('button');
        deleteBtn.addEventListener('click', () => {
            const commentId = row.dataset.id;
            deleteComment(commentId);
        });

        return row;
    }

    function filterComments() {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('#commentsBody tr');

        rows.forEach((row) => {
            const name = row.querySelector('td:first-child').innerText.toLowerCase();
            const email = row.querySelector('td:nth-child(2)').innerText.toLowerCase();
            const body = row.querySelector('td:nth-child(3)').innerText.toLowerCase();

            if (
                name.includes(searchTerm) ||
                email.includes(searchTerm) ||
                body.includes(searchTerm)
            ) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    async function deleteComment(commentId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Komentarz o ID ${commentId} został pomyślnie usunięty.`);
            } else {
                console.log(`Błąd podczas usuwania komentarza o ID ${commentId}.`);
            }
        } catch (error) {
            console.error('Błąd usuwania komentarza:', error);
        }
    }

    const commentsBody = document.querySelector('#commentsBody');
    const deleteSelectedBtn = document.querySelector('#deleteSelected');
    const searchInput = document.querySelector('#search');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();

        comments.forEach((comment) => {
            const row = createTableRow(comment);
            commentsBody.appendChild(row);
        });

        deleteSelectedBtn.addEventListener('click', deleteSelectedComments);
        searchInput.addEventListener('input', filterComments);
    } catch (error) {
        console.log('Błąd pobierania danych', error);
    }
});
