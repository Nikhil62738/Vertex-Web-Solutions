/**
 * Vertex Web Solutions — Contact form receiver.
 *
 * Paste this entire file into a Google Apps Script project bound to a Google
 * Sheet, then deploy it as a Web App (see SETUP-SHEETS.md).
 *
 * The website POSTs JSON as text/plain (to avoid CORS preflight). Apps Script
 * receives the body in e.postData.contents.
 */

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Fall back to form-encoded parameters if not JSON
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Write a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Project Type",
        "Requirement",
        "Language",
        "Source"
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.projectType || "",
      data.requirement || "",
      data.language || "",
      data.source || "vertex-website"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Vertex contact endpoint is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
