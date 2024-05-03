document.getElementById('evaluationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateTotal(); // Function to calculate the total score
    document.getElementById('placement').style.display = 'block'; // Show the thank you message
});

function calculateTotal() {
    const fluency = parseInt(document.querySelector('select[name="fluency"]').value, 10);
    const pronunciation = parseInt(document.querySelector('select[name="pronunciation"]').value, 10);
    const grammar = parseInt(document.querySelector('select[name="grammar"]').value, 10);
    const vocabulary = parseInt(document.querySelector('select[name="vocabulary"]').value, 10);
    const content = parseInt(document.querySelector('select[name="content"]').value, 10);

    const total = fluency + pronunciation + grammar + vocabulary + content;
    document.getElementById('total').value = total; // Display the calculated total in the total input field
}

document.querySelectorAll('select').forEach(selectElement => {
    selectElement.addEventListener('change', function() {
        calculateTotal(); // Recalculate the total whenever any select value changes
    });
});
