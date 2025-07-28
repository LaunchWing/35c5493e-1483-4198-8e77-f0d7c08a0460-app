import { validateInput, fetchTemplateSuggestions } from '../functions/api/helpers';

export async function TemplateSelectionBackendHandler(req: Request): Promise<Response> {
  try {
    // Validate the incoming request
    const { isValid, errors } = validateInput(req);
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid input', details: errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Fetch template suggestions based on validated input
    const suggestions = await fetchTemplateSuggestions(req);
    return new Response(JSON.stringify(suggestions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    // Handle any unexpected errors
    return new Response(JSON.stringify({ error: 'Internal Server Error', message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}