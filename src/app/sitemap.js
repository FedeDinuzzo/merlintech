export default async function sitemap() {
  const routes = ['', '/servicios', '/la-empresa'].map((route) => ({
    url: `http://merlintech.com.ar/${route}`,
    lastModified: new Date().toISOString()
  }))

  return routes
}