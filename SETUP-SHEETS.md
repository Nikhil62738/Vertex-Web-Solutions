# Connect the contact form to Google Sheets

This takes ~5 minutes and needs **zero backend code or paid plan**.

## 1. Create the Google Sheet

1. Go to [sheets.new](https://sheets.new) to create a new spreadsheet.
2. Rename it something like **Vertex Leads**. You don't need to add any columns — the script will create the header row automatically on the first submission.

## 2. Add the Apps Script

1. In your sheet, open **Extensions → Apps Script**.
2. Delete the default `Code.gs` content.
3. Open `google-apps-script/Code.gs` from this project and paste **its entire contents** into the Apps Script editor.
4. Click the **Save** icon (or `Ctrl/Cmd + S`). Give the project a name like **Vertex Contact**.

## 3. Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to *Select type* and choose **Web app**.
3. Fill in:
   - **Description:** Vertex contact form
   - **Execute as:** *Me*
   - **Who has access:** *Anyone* (this is required so the public website can POST to it; the script only writes to your sheet — nobody can read it)
4. Click **Deploy**.
5. Authorize the script when prompted (you may see an "unverified app" warning — click *Advanced → Go to Vertex Contact (unsafe)* → *Allow*). This is normal because the script is private to you.
6. Copy the **Web app URL** at the end. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Plug the URL into the website

1. In the project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and paste the Web app URL:
   ```
   VITE_SHEETS_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
3. Restart `npm run dev` so Vite picks up the new env var.

## 5. (Production) Set the env var on your host

If you deploy to **Netlify, Vercel, Cloudflare Pages**, etc., add the same variable in the host's environment settings:

- **Key:** `VITE_SHEETS_URL`
- **Value:** your Web app URL

Then re-deploy. That's it — every contact form submission will append a new row to your sheet.

## 6. Test it

1. Open the live (or dev) site and submit the contact form.
2. Refresh the Google Sheet — you should see a new row with name, email, phone, project type, requirement, language and timestamp.
3. If nothing appears, open the browser console for errors and re-check the Web app URL.

## Notes

- The website sends the request with `mode: "no-cors"` and `Content-Type: text/plain` to avoid Google Apps Script's CORS preflight rejection. The response is therefore opaque to the browser, but Apps Script still receives and processes the payload.
- If `VITE_SHEETS_URL` is not set, the contact form falls back to opening WhatsApp with the message pre-filled. You can use both — they don't conflict.
- To re-deploy after editing `Code.gs`, click **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The URL stays the same.
- Want email notifications too? Add this inside `doPost` after `sheet.appendRow(...)`:
  ```js
  MailApp.sendEmail({
    to: "vertexwebsolutions@gmail.com",
    subject: "New Vertex lead: " + (data.name || ""),
    body: JSON.stringify(data, null, 2)
  });
  ```
