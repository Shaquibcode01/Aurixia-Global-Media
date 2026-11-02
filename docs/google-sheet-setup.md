# Send contact-form leads to a spreadsheet

1. Create a new Google Sheet (sheets.google.com), e.g. "Aurixia Leads".
2. Extensions → Apps Script. Delete the sample code and paste:

```js
const SECRET = "CHANGE-ME-TO-A-LONG-RANDOM-STRING";
const HEADERS = ["Submitted (IST)", "Name", "Email", "Phone", "Service", "Budget", "Message"];

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== SECRET) return out({ ok: false, error: "unauthorized" });
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName("Leads") || ss.insertSheet("Leads");
  if (sh.getLastRow() === 0) { sh.appendRow(HEADERS); sh.setFrozenRows(1); sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold"); }
  const when = Utilities.formatDate(new Date(d.submittedAt), "Asia/Kolkata", "dd MMM yyyy, hh:mm a");
  // Prefix with ' so values starting with = + - @ are never run as formulas
  const safe = (v) => /^[=+\-@]/.test(String(v)) ? "'" + v : v;
  sh.appendRow([when, d.name, d.email, d.phone, d.service, d.budget, d.message].map(safe));
  // Optional email alert:
  // MailApp.sendEmail("info@aurixiaglobalmedia.com", "New lead: " + d.name, d.message + "\n\n" + d.email + " | " + d.phone);
  return out({ ok: true });
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
```

3. Replace `CHANGE-ME…` with your own long random string.
4. Deploy → New deployment → type **Web app** → Execute as **Me**, Who has access **Anyone** → Deploy → authorise → copy the **Web app URL**.
5. In Vercel → Project → Settings → Environment Variables (Production), add:
   - `SHEET_WEBHOOK_URL` = the Web app URL
   - `SHEET_WEBHOOK_SECRET` = the same random string
6. Redeploy. Submit the form once to test — a row appears in the "Leads" tab.
7. For Excel: File → Download → Microsoft Excel (.xlsx) any time.
