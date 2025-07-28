// Auto-generated entrypoint for Cloudflare Worker

import { TemplateSelectionBackendHandler } from './api/TemplateSelectionBackend';
import { ContentPersonalizationBackendHandler } from './api/ContentPersonalizationBackend';
import { ATSOptimizationBackendHandler } from './api/ATSOptimizationBackend';
import { FeedbackIterationBackendHandler } from './api/FeedbackIterationBackend';

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeGenius AI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles can be added here if needed */
    </style>
</head>
<body class="bg-white text-gray-800">
    <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto flex items-center justify-between">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-VQ4FX5FgzZztCuDgMhLEhGrb.png?st=2025-07-28T01%3A41%3A32Z&se=2025-07-28T03%3A41%3A32Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T23%3A51%3A05Z&ske=2025-07-28T23%3A51%3A05Z&sks=b&skv=2024-08-04&sig=OiZEhaZTfnWz3ZYx5wjYO8kKvEGEEkrqL1a6Bo92qzg%3D" alt="ResumeGenius AI Logo" class="h-12">
            <h1 class="text-2xl font-bold">ResumeGenius AI</h1>
            <p class="text-sm">Craft Your Future with Intelligent Precision</p>
        </div>
    </header>
    
    <main class="container mx-auto py-8">
        <section class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Get Started with Your Personalized Resume</h2>
            <p class="text-gray-600">Input your career details and let our AI help you craft the perfect resume.</p>
        </section>

        <section id="resume-form" class="bg-gray-100 p-8 rounded-md shadow-md">
            <form id="user-details-form" class="space-y-4">
                <div>
                    <label for="industry" class="block text-sm font-medium text-gray-700">Industry</label>
                    <select id="industry" name="industry" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>Education</option>
                    </select>
                </div>

                <div>
                    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                    <input type="text" id="role" name="role" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                </div>

                <div>
                    <label for="career-level" class="block text-sm font-medium text-gray-700">Career Level</label>
                    <select id="career-level" name="career-level" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        <option>Entry Level</option>
                        <option>Mid Level</option>
                        <option>Senior Level</option>
                    </select>
                </div>

                <button type="button" id="generate-resume" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Generate Resume</button>
            </form>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-4 mt-12">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 ResumeGenius AI. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
`;
const STYLE_CSS = ``;
const SCRIPT_JS = `
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
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/TemplateSelectionBackend') return TemplateSelectionBackendHandler(request);
    if (path === '/api/ContentPersonalizationBackend') return ContentPersonalizationBackendHandler(request);
    if (path === '/api/ATSOptimizationBackend') return ATSOptimizationBackendHandler(request);
    if (path === '/api/FeedbackIterationBackend') return FeedbackIterationBackendHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
