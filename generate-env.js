const fs = require('fs');
const path = require('path');

console.log('🔧 Generating env.js...');

const env = {
  FIREBASE_API_KEY: process.env.VERCEL_PUBLIC_FIREBASE_API_KEY || '',
  FIREBASE_AUTH_DOMAIN: process.env.VERCEL_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  FIREBASE_PROJECT_ID: process.env.VERCEL_PUBLIC_FIREBASE_PROJECT_ID || '',
  FIREBASE_STORAGE_BUCKET: process.env.VERCEL_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  FIREBASE_MESSAGING_SENDER_ID: process.env.VERCEL_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  FIREBASE_APP_ID: process.env.VERCEL_PUBLIC_FIREBASE_APP_ID || '',
  FIREBASE_MEASUREMENT_ID: process.env.VERCEL_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
  GOOGLE_OAUTH_CLIENT_ID: process.env.VERCEL_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ''
};

const envContent = `window.__ENV__ = {
  FIREBASE_API_KEY: "${env.FIREBASE_API_KEY}",
  FIREBASE_AUTH_DOMAIN: "${env.FIREBASE_AUTH_DOMAIN}",
  FIREBASE_PROJECT_ID: "${env.FIREBASE_PROJECT_ID}",
  FIREBASE_STORAGE_BUCKET: "${env.FIREBASE_STORAGE_BUCKET}",
  FIREBASE_MESSAGING_SENDER_ID: "${env.FIREBASE_MESSAGING_SENDER_ID}",
  FIREBASE_APP_ID: "${env.FIREBASE_APP_ID}",
  FIREBASE_MEASUREMENT_ID: "${env.FIREBASE_MEASUREMENT_ID}",
  GOOGLE_OAUTH_CLIENT_ID: "${env.GOOGLE_OAUTH_CLIENT_ID}"
};
`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'env.js'), envContent);
console.log('✓ env.js created successfully');
