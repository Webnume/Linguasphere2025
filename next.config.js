/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/mentions-legales",
        destination: "https://www.linguasphere.fr/cgv/mentions-legales.pdf",
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
