import { expectedResultObject, getAllAssignments } from "./assignmentClient";

describe("display a dictionary of all tags with a lost of all the assignments with that tag", () => {
    it("should be sorted on by assignment id within each tag", async () => {
        const result = await getAllAssignments(); 
        

        // Assert
        expect(result).toEqual(expectedResultObject);
    });
})