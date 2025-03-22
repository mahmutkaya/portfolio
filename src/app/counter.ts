// src/app/counter.ts
export async function incrementCounter() {
  // Simplified version that doesn't require Cloudflare DB
  console.log('Counter functionality disabled in local environment');
  return { value: 1 };
}

export async function getRecentPageViews() {
  // Return mock data when not in Cloudflare environment
  return [
    { timestamp: new Date().toISOString(), page: 'home' }
  ];
}
