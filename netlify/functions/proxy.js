const https = require("https");
const http = require("http");
const { URL } = require("url");

exports.handler = async function(event) {
  const target = event.queryStringParameters?.url;
  if (!target) {
    return {
      statusCode: 400,
      body: "Missing 'url' query parameter",
    };
  }

  // Validate URL to avoid abuse (basic check)
  let targetUrl;
  try {
    targetUrl = new URL(target);
  } catch {
    return {
      statusCode: 400,
      body: "Invalid URL",
    };
  }

  return new Promise((resolve) => {
    const lib = targetUrl.protocol === "https:" ? https : http;

    const proxyReq = lib.get(targetUrl, (proxyRes) => {
      let body = "";

      proxyRes.on("data", (chunk) => {
        body += chunk;
      });

      proxyRes.on("end", () => {
        resolve({
          statusCode: proxyRes.statusCode,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Content-Type": proxyRes.headers["content-type"] || "application/json",
          },
          body,
        });
      });
    });

    proxyReq.on("error", (err) => {
      resolve({
        statusCode: 500,
        body: "Proxy error: " + err.message,
      });
    });
  });
};
