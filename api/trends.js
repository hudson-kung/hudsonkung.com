function decodeEntity(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeEntity(match?.[1] || "");
}

function fallbackTrends() {
  return [
    { title: "AI tools", traffic: "500K+" },
    { title: "summer travel", traffic: "200K+" },
    { title: "meal prep", traffic: "100K+" },
    { title: "electric bills", traffic: "100K+" },
    { title: "side hustles", traffic: "50K+" },
    { title: "short form video", traffic: "50K+" },
    { title: "personal finance", traffic: "50K+" },
    { title: "home services", traffic: "20K+" }
  ];
}

module.exports = async function handler(req, res) {
  try {
    const response = await fetch("https://trends.google.com/trends/trendingsearches/daily/rss?geo=US", {
      headers: { "User-Agent": "TrendSearcher/1.0" }
    });

    if (!response.ok) throw new Error(`Google Trends returned ${response.status}`);

    const body = await response.text();
    const items = [...body.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, 10);
    const trends = items.map((item, index) => ({
      title: readTag(item[1], "title") || `Trend ${index + 1}`,
      traffic: readTag(item[1], "ht:approx_traffic") || "rising",
      news: readTag(item[1], "ht:news_item_title")
    }));

    res.status(200).json({
      source: trends.length ? "Google Trends daily searches" : "Fallback trend signals",
      trends: trends.length ? trends : fallbackTrends()
    });
  } catch (error) {
    res.status(200).json({ source: "Fallback trend signals", trends: fallbackTrends() });
  }
};
