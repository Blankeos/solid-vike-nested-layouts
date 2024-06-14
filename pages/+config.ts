import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
  // <title>
  // ssr: false,
  title: "My Vike App",
  extends: vikeSolid,
} satisfies Config;
