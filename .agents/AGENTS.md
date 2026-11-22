# Behavioral Rules

## Localhost Port Assignments for Node.js/Express Projects
- When creating or modifying a web server or backend service, always assign a unique localhost port (e.g. 3001, 3002, 3003, 3004, 3005) instead of clashing on the default port 3000.
- Update the startup batch files (`run.bat`, etc.) to set the correct environment variables, execute port-clearing scripts before start, and open the browser to the exact custom port.
