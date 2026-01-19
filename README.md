# Home Deecor Web

This project is a Node.js application ready for deployment on Hostinger.

## Prerequisites

- Node.js (v14 or higher)
- Hostinger Account with "Setup Node.js App" feature (available on Shared Hosting and Cloud Hosting).

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    npm start
    ```
3.  Open [http://localhost:3000](http://localhost:3000).

## Hostinger Deployment Guide

1.  **Prepare Files**:
    - Ensure your project files are compliant (this has been done with the latest code updates).
    - Zip your project files (excluding `node_modules`).
      - Select all files in the root directory -> Right-click -> Send to -> Compressed (zipped) folder.
      - OR use the File Manager in Hostinger to upload files directly.

2.  **Upload to Hostinger**:
    - Log in to hPanel.
    - Go to **Files > File Manager**.
    - Navigate to `public_html` (or a subdirectory if deploying to a subdomain/folder).
    - Upload your project files. Ensure `package.json`, `server.js`, and the `public` folder are in the root of your deployment directory.

3.  **Setup Node.js App**:
    - In hPanel, go to **Advanced > Node.js App**.
    - Click **Create New Application**.
    - **Node.js Version**: Select Recommended (e.g., v18 or v20).
    - **Application Mode**: Production.
    - **Application Root**: The path to your uploaded files (e.g., `public_html`).
    - **Application Startup File**: `server.js`.
    - Click **Create**.

4.  **Install Dependencies**:
    - Once created, you will see a button **Run NPM Install** (or standard generic "NPM Install"). Click it to install the packages on the server.

5.  **Access Website**:
    - Visit your domain.

## Troubleshooting

- **500 Error / App not loading**:
    - Check the "Application Startup File" is correctly set to `server.js`.
    - Check the Logs in the Node.js App section.
    - Ensure `node_modules` was installed successfully via the "Run NPM Install" button.

- **Email Issues**:
    - Ensure your Gmail App Password is correct.
    - Gmail may block sign-in attempts if it suspects unusual activity. Check your Google Account Security settings.