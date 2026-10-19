import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@inngest/agent-kit", "inngest", "@e2b/code-interpreter"],
};

export default nextConfig;
