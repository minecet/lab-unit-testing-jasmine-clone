// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
        });
        it("should return the area of the two numbers", () => {
            expect(calculateArea(5, 2)).toEqual(10);
            expect(calculateArea(8, 4)).toEqual(32);
            expect(calculateArea(100, 10)).toEqual(1000);
          });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
        it('should return undefined if any of the arguments is not a number', () =>{

            expect(calculateArea(1, '')).toEqual(undefined);
            expect(calculateArea(1, true)).toEqual(undefined);
            expect(calculateArea('3', '3')).toEqual(undefined);
    
        });

    })    
})

