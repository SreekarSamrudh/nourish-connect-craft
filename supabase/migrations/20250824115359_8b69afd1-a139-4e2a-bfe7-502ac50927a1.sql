-- Fix security vulnerability: Prevent unauthorized access to customer inquiries
-- Remove any existing public read policies on inquiries table and ensure only admins can read

-- Drop any existing public read policy if it exists
DROP POLICY IF EXISTS "Allow public read access on inquiries" ON public.inquiries;

-- Ensure only the correct policies exist:
-- 1. Admins can do everything (already exists)
-- 2. Anyone can create inquiries (already exists) 
-- 3. No public read access (this fixes the security issue)

-- The existing policies should be:
-- "Allow admins full access to inquiries" - KEEPS admin access
-- "Allow anyone to create an inquiry" - KEEPS public ability to submit inquiries

-- No additional policies needed - this ensures only admins can read inquiries