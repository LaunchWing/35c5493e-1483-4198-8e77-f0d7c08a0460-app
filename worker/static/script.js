
document.getElementById('generate-resume').addEventListener('click', async function() {
    const industry = document.getElementById('industry').value;
    const role = document.getElementById('role').value;
    const careerLevel = document.getElementById('career-level').value;

    const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            industry,
            role,
            careerLevel
        }),
    });

    if (response.ok) {
        const data = await response.json();
        alert('Resume generated successfully!');
        // Handle further actions such as displaying or downloading the resume
    } else {
        alert('Failed to generate resume. Please try again later.');
    }
});
