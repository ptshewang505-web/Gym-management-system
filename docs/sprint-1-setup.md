# Sprint 1 – Project Foundation & Development Environment Setup

## Aim
Prepare the MERN development environment and initialize the Gym Management System workspace and version control.

## Software checklist
- [ ] Visual Studio Code
- [ ] Node.js LTS
- [ ] npm (installed with Node.js)
- [ ] Git
- [ ] Google Chrome or Microsoft Edge
- [ ] MongoDB Community Server or MongoDB Atlas account
- [ ] GitHub account

## Verification commands
```bash
node --version
npm --version
git --version
```

## Git setup
```bash
git init
git status
git add .
git commit -m "Initial project structure for Gym Management System"
```

## GitHub connection
Create an empty GitHub repository named `Gym-Management-System`, then run:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Gym-Management-System.git
git push -u origin main
```
Replace `YOUR-USERNAME` with the GitHub username. Do not commit passwords, access tokens, or `.env` files.
