import * as namespace from "./model";
import * as client from "@glas/platform/client";

export default async function(): Promise<boolean> {
    return client.init({ namespace })
}