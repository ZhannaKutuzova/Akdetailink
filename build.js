#!/usr/bin/env node
import { build } from 'vite';
import { execSync } from 'child_process';

console.log('🚀 Building AK Detailing Service for Vercel...');

try {
  // Build the frontend
  console.log('📦 Building React frontend...');
  await build();
  console.log('✅ Frontend build completed');

  console.log('🎉 Build process completed successfully!');
  console.log('📁 Files ready in dist/public for Vercel deployment');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}