const SHEET_NAME = "events";
const HEADER = [
  "timestamp",
  "siteId",
  "type",
  "page",
  "path",
  "hash",
  "title",
  "visitorId",
  "sessionId",
  "language",
  "referrer",
  "timezone",
  "viewportWidth",
  "viewportHeight",
  "payload",
  "userAgent",
];

function doPost(e) {
  try {
    const body = JSON.parse((e.postData && e.postData.contents) || "{}");
    const events = Array.isArray(body.events) ? body.events : [];
    const siteId = body.siteId || "";
    const rows = events.map((event) => [
      safe_(event.timestamp),
      safe_(siteId),
      safe_(event.type),
      safe_(event.page),
      safe_(event.path),
      safe_(event.hash),
      safe_(event.title),
      safe_(event.visitorId),
      safe_(event.sessionId),
      safe_(event.language),
      safe_(event.referrer),
      safe_(event.timezone),
      event.viewport && event.viewport.width ? event.viewport.width : "",
      event.viewport && event.viewport.height ? event.viewport.height : "",
      JSON.stringify(event.payload || {}),
      safe_(event.userAgent),
    ]);

    if (rows.length) {
      const sheet = getSheet_();
      sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADER.length).setValues(rows);
    }
    return output_({ ok: true, inserted: rows.length });
  } catch (error) {
    return output_({ ok: false, error: String(error) });
  }
}

function doGet(e) {
  const params = (e && e.parameter) || {};
  if (params.mode !== "events") return output_({ ok: true }, params.callback);

  const siteId = params.siteId || "";
  const limit = Math.min(Number(params.limit || 5000), 10000);
  const sheet = getSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return output_({ events: [] }, params.callback);

  const startRow = Math.max(2, lastRow - limit + 1);
  const values = sheet.getRange(startRow, 1, lastRow - startRow + 1, HEADER.length).getValues();
  const events = values
    .map(rowToEvent_)
    .filter((event) => !siteId || event.siteId === siteId);
  return output_({ events }, params.callback);
}

function getSheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  const spreadsheet = spreadsheetId ? SpreadsheetApp.openById(spreadsheetId) : SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER);
  }
  return sheet;
}

function rowToEvent_(row) {
  let payload = {};
  try {
    payload = JSON.parse(row[14] || "{}");
  } catch (error) {
    payload = {};
  }
  return {
    timestamp: row[0],
    siteId: row[1],
    type: row[2],
    page: row[3],
    path: row[4],
    hash: row[5],
    title: row[6],
    visitorId: row[7],
    sessionId: row[8],
    language: row[9],
    referrer: row[10],
    timezone: row[11],
    viewport: {
      width: row[12],
      height: row[13],
    },
    payload,
    userAgent: row[15],
  };
}

function output_(data, callback) {
  const json = JSON.stringify(data);
  if (callback) {
    return ContentService.createTextOutput(`${callback}(${json});`).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function safe_(value) {
  const text = value === undefined || value === null ? "" : String(value);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}
