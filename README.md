# Next.js router.push() error with dynamic pathname

This repo demonstrates a common error encountered when using `router.push()` in Next.js with dynamically generated pathnames that may be missing the leading '/'.  The error occurs because the router expects a pathname that starts with a forward slash.

The `bug.js` file contains the buggy code. The `bugSolution.js` shows the corrected version.

## Bug
The problem stems from the `router.push()` function in Next.js. If the provided pathname does not begin with a '/', an error is thrown.

## Solution
The simplest solution is to ensure the pathname always starts with a '/'. You can achieve this by adding a leading '/' if one is not already present. 
