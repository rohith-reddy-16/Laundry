import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUuid }) => {

    let LocalUuid = inUuid

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();

    LocalFromLowDb.read();

    if ("error" in LocalFromLowDb.data) {
        LocalReturnData.err = LocalFromLowDb.data.error;
        return LocalReturnData;
    }

    let LocalFindData = LocalFromLowDb.data.find(e => e.UuId == LocalUuid)

    if (LocalFindData === undefined) {
        LocalReturnData.KReason = "UuId Not Found"
        return LocalReturnData
    }

    LocalFindData.isMailValidated = true

    LocalFromLowDb.write();

    LocalReturnData.KTF = true;


    return LocalUuid;
};


export { StartFunc };
