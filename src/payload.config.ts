// storage-adapter-import-placeholder
import { Media } from "./collections/Media";
import { Products } from "./collections/Products";
import { Tags } from "./collections/Tags";
import { Users } from "./collections/Users";
import lexicalConfig from "./lexical.config";
import { siteName } from "@/lib/metadata";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { en } from "@payloadcms/translations/languages/en";
import { es } from "@payloadcms/translations/languages/es";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: "/components/admin/icon.tsx",
        Logo: "/components/admin/logo.tsx",
      },
    },
    meta: {
      titleSuffix: `| ${siteName}`,
    },
  },
  collections: [Users, Media, Products, Tags],
  editor: lexicalEditor(lexicalConfig),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  i18n: {
    supportedLanguages: { en, es },
    fallbackLanguage: "es",
  },
});
