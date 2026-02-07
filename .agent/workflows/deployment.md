---
description: Deploying AI Study Hub to Vercel via GitHub
---

Follow these steps to deploy your professional AI Study Hub website:

### Step 1: Initialize Git and Push to GitHub
1. Open your terminal in the `new web` folder.
2. Initialize git:
   ```bash
   git init
   ```
3. Add all files:
   ```bash
   git add .
   ```
4. Commit your changes:
   ```bash
   git commit -m "Initial commit: AI Study Hub Professional"
   ```
5. Create a new repository on [GitHub](https://github.com/new).
6. Copy the remote repository URL and run:
   ```bash
   git remote add origin YOUR_REPOSITORY_URL
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** and then **"Project"**.
3. Import your `AI Study Hub` repository from the list.
4. Vercel will automatically detect that this is a **Vite** project.
5. Click **"Deploy"**.

### Done!
Your website will be live at a URL like `ai-study-hub.vercel.app`. Every time you push changes to GitHub, Vercel will automatically update your live site.
