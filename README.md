Repository is an example of how next.js (v15.1.1-canary.2) dynamic routes on a single parent route can act differently from development and production.

When you call a `Thenable` (Promise or promise-like) function with a catch-all and dynamic-route on the same level the dynamic-route takes precedence in production mode, but not in development

example route where the can occur:
```text
app/
├── dynamic-route
│   ├── [[...mode]]
│   │   └── page.tsx
│   ├── [clientId]
│   │   └── page.tsx
│   └── layout.tsx
```

You can view this repository in action at: https://next-dynamic-routes-issue.vercel.app/

https://github.com/user-attachments/assets/823ad6f6-5db0-417c-ab89-2a5e7dd6dcaa

