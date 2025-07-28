import { validateInput } from '../functions/api/validateInput';
import { optimizeForATS } from '../functions/api/optimizeForATS';

export async function ATSOptimizationBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Invalid Content-Type' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const body = await req.json();
    const { isValid, errors } = validateInput(body);

    if (!isValid) {
      return new Response(JSON.stringify({ errors }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const optimizedResume = optimizeForATS(body);

    return new Response(JSON.stringify({ optimizedResume }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
