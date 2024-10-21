const comments = [];

document.getElementById('submit-comment').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    if (commentInput.value) {
        comments.push(commentInput.value);
        commentInput.value = '';
        renderComments();
    }
});

function renderComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
}