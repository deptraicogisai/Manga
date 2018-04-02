import store from "../store";
import {Block, Unblock} from "../action/block";

export class ServiceBase {
    protected async Get(url: string): Promise<any> {

        store.dispatch(Block());

        let result = await fetch(url);

        store.dispatch(Unblock());

        if (result.ok) {
            return result.json();
        }
    }

    protected async Post(url: string, contentBody: object, showBlockUI: boolean = false): Promise<any> {

        let formBody: any = [];

        for (var property in contentBody) {

            var encodedKey = encodeURIComponent(property);

            var encodedValue = encodeURIComponent(contentBody[property]);

            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        if (showBlockUI) {
            store.dispatch(Block());
        }

        let result = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody,
            });

        if (showBlockUI) {
            store.dispatch(Unblock());
        }

        if (result.ok) {
            return await result.json();
        }
    }
}