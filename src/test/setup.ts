import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from '@/mock/node.ts';

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers());
