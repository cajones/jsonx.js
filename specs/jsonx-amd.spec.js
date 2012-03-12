
describe("Given JSONX has been loaded using AMD", function() {
   
    it("should have loaded the module", function(){
        
        require(['../jsonx'], function(jsonx) {
      
            expect(jsonx).toBeTruthy();

        });    

    });
    
});
