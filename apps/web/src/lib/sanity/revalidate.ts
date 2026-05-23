import { revalidateTag } from "next/cache";

async function handleRevalidation(_type: string) {
  switch (_type) {
    case "project":
      revalidateTag("project", "max");
      break;
  }
}

export { handleRevalidation };
