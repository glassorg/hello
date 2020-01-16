import * as webServer from "@glas/platform/server/webServer"
import path from "path"

// create a standard express app with a static www server and www/api handlers
const app = webServer.create({ projectRoot: path.join(__dirname, "../") })
