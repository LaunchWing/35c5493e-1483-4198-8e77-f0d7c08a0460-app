import { validateRequest, generatePersonalizedContent } from '../functions/api/helpers';

export async function ContentPersonalizationBackendHandler(req: Request): Promise<Response> {
  try {
    // Validate request method
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    // Parse and validate request body
    const requestBody = await req.json();
    const validationError = validateRequest(requestBody);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Generate personalized content
    const personalizedContent = await generatePersonalizedContent(requestBody);

    // Return response
    return new Response(JSON.stringify({ personalizedContent }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
