import { IonicSafeString } from "@ionic/angular";

export interface irespLogin{
    message: string | IonicSafeString | undefined;
    error:string,
    status:string,
    msg:string
}