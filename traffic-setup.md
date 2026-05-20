# Realm Defense Traffic Console Setup

The dashboard is available at `/traffic.html`.

Default password:

```text
realmtdguide2026
```

The password gate is a client-side screen for a GitHub Pages site. It hides the dashboard from casual visitors, but it is not the same as server-side access control.

## Connect Real Online Traffic

GitHub Pages is static and cannot store visitor events by itself. Use the included `analytics-collector.gs` with Google Apps Script:

1. Create a Google Sheet for traffic events.
2. Open Extensions -> Apps Script.
3. Paste the contents of `analytics-collector.gs`.
4. In Apps Script, set Script property `SPREADSHEET_ID` to your Google Sheet ID.
5. Deploy as a Web App.
6. Set access to "Anyone".
7. Copy the Web App URL into `traffic-config.js`:

```js
endpoint: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
endpointMode: "jsonp",
```

After that, the public site will send visit events to the Apps Script endpoint, and `/traffic.html` will read the collected events after password login.

## Change Password

Generate a new SHA-256 hash and replace `dashboardPasswordHash` in `traffic-config.js`.

```bash
node -e "crypto=require('crypto'); console.log(crypto.createHash('sha256').update('your-new-password').digest('hex'))"
```
