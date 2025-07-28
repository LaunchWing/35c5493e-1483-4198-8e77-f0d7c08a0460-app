import { validateFeedbackRequest, processFeedback } from '../functions/api/feedbackHelpers';

export async function FeedbackIterationBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Invalid content type' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const requestBody = await req.json();
    const validationError = validateFeedbackRequest(requestBody);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const feedbackResult = await processFeedback(requestBody);
    return new Response(JSON.stringify(feedbackResult), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}