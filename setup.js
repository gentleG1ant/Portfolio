const { execSync } = require('child_process');
const fs = require('fs');

console.log('=============================================');
console.log('🚀 Starting Codespace / Environment Setup...');
console.log('=============================================');

try {
  console.log('\n📦 Installing dependencies...');
  // Cross-platform install via npm
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\n✅ Setup completed successfully!');
  console.log('👉 To start the development server, run: npm run dev');
  
} catch (error) {
  console.error('\n❌ Setup failed:', error.message);
  process.exit(1);
}
