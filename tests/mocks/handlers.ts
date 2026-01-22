import { http, HttpResponse } from 'msw';

export const handlers = [
  // Auth handlers
  http.post('/api/auth/register', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: 'test-user-id',
      email: (body as { email: string }).email,
      name: (body as { name: string }).name,
    });
  }),

  http.get('/api/auth/session', () => {
    return HttpResponse.json({
      user: {
        id: 'test-user-id',
        email: 'test@example.com',
        name: 'Test User',
        role: 'ATHLETE',
      },
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
  }),

  // Athletes handlers
  http.get('/api/athletes', () => {
    return HttpResponse.json({
      athletes: [
        {
          id: '1',
          name: 'John Doe',
          sport: 'Basketball',
          position: 'Point Guard',
          rating: 85,
        },
      ],
      total: 1,
    });
  }),

  http.get('/api/athletes/:id', ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: 'John Doe',
      sport: 'Basketball',
      position: 'Point Guard',
      rating: 85,
    });
  }),

  // Rankings handlers
  http.get('/api/rankings', () => {
    return HttpResponse.json({
      rankings: [
        { rank: 1, athleteId: '1', name: 'John Doe', score: 95.5 },
        { rank: 2, athleteId: '2', name: 'Jane Smith', score: 92.3 },
      ],
    });
  }),

  // Onboarding handlers
  http.post('/api/onboarding/complete', async () => {
    return HttpResponse.json({ success: true });
  }),
];
