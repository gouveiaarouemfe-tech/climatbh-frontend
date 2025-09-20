
import { Post } from "./src/lib/strapi";

declare global {
  interface CustomPost extends Post {}
}

