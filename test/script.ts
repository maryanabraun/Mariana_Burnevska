import {DropboxController} from "../controllers/DropboxController";
import { expect } from 'chai';
import 'mocha';

let dropboxController = new DropboxController();



describe("Uploading file to DropBox", () => {
    it("Upload", async () => {
        const res = await dropboxController.uploadFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Getting file meta data from DropBox", () => {
    it("Get", async () => {
        const res = await dropboxController.getMetadata();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Deleting file from DropBox", () => {
    it("Delete", async () => {
        const res = await dropboxController.deleteFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})
