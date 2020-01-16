import Context from "@glas/platform/ui/Context";
import State from "@glas/platform/data/State";
import Store from "@glas/platform/data/Store";
import Key from "@glas/platform/data/Key";
import invoke from "@glas/platform/server/invoke";
import { div, span, p } from "@glas/platform/ui/html";
import client from "../client";

client().then(() => {

    invoke("/api/hello", {}).then(serverResponse => {
        //  and then add it to the page state
        Store.default.patch(IndexPageState.key, { serverResponse: serverResponse as any })
    })
    
    //  define main page state
    @State.class()
    class IndexPageState extends State {
    
        @State.property()
        serverResponse?: { message: string }
    
        //  this state object is a singleton so we define the only key we need statically
        static key = Key.create(IndexPageState)
    }
    
    //  bind our rendering function to the document.body
    Context.bind(c => {
        //  get page state
        const state = c.store.get(IndexPageState.key)
    
        //  render title
        document.title = "Hello World Title"
    
        //  render body
        div({
            content() {
                p("Hello from the Client")
                if (state.serverResponse) {
                    p("Message from the Server: " + state.serverResponse.message)
                }
            }
        })
    })
    
})

