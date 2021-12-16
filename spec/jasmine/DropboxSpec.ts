import {DropboxController} from "../../controllers/DropboxController";

let dropboxController = new DropboxController();

describe("Uploading file jasmine to DropBox", () => {
    it("Uploading file to DropBox", async () => {
        const response = await dropboxController.uploadFile();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 15000);
})

describe("Getting file jasmine meta data from DropBox", () => {
    it("Getting file from DropBox", async () => {
        const response = await dropboxController.getMetadata();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 15000);
})

describe("Deleting file jasmine from DropBox", () => {
    it("Deleting file from DropBox", async () => {
        const response = await dropboxController.deleteFile();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 15000);
})
