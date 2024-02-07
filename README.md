A tiny reproducible for the https://github.com/cloudflare/workers-sdk/issues/4849 showing that Origin header is ignored/lost after `wrangler` upgrade to versions above (not inclusive) 3.24.0.

The following collection of snippets will display the issue.

```bash
git clone git@github.com:flexchar/workers-sdk-issue-4849.git
cd workers-sdk-issue-4849
npm install
npm run dev
curl -H 'Origin: http://copenhagen.dk' -H 'Referer: http://copenhagen.dk' http://localhost:8787
```
