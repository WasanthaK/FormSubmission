function submitForm(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    // Define your token and endpoint
    const token = 'YOUR_Y1hvUURZK1lLWVZhZkdDMzVSZVZCL3YwQVplN2FIMklVdjBqOXNlV2R6S0RDekdMaUZuRGJibUQyL3J0blR2OVlJdnhuS2x3TUF2ZWZpTlFVMnFNRTM5bW5IQWo1Snk0bG1wTnUyQ1plQ2g3Tm5xQThxditiMnNQcmNacmJkTzlSaGdPSzg2Y1ZFNnpWWWZpeUp4d1pVck91ZHV1WS9pajRRdnA4TVFjNTNpblBtQmdkbXhCdnA0azhqYUtEbEwxNzRMcDFOdjRkUi9vTHV6TjB2bDZrWWlmYUZtLzNyZ3lyN0RjV3hEV0N4OGZxcS9CTVJDaDVpNzl6VXFveXZhbTJSRnFadkJ2L0hJa2RwdXhaZnFOWlE9PQ==TOKEN_HERE';
    const endpoint = 'https://flowdohdemo.enadocapp.com/wfengine/engine/queue'
    // Create the request
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred!');
    });
}