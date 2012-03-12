var root = this;

describe('Given JSONX has been loaded the environment.', function() {
    
    root.JSONX = root.JSONX || require('../JSONX.js');

    it('it should exist', function(){
        expect(root.JSONX).toBeTruthy();
    });
    
    describe('when a heirarchical JSON document is being turned into a POX string', function() {
        var jsonDocument = {
            'name' : 'Alice',
            'age' : '18',
            'department' : {
                'name' : 'HR'
            }
        };
        var xmlDocument = '<person><name>Alice</name><age>18</age><department><name>HR</name></department></person>';

        it('it should format JSON as XML', function () {
            expect(JSONX.stringify(jsonDocument, 'person')).toEqual(xmlDocument);
        });
    });

    describe('when a JSON Document has attributes on the root element', function() {
        var jsonDocument = { 
            '@bar' : 'baz' 
        };
        var xmlDocument = '<foo bar="baz"></foo>';

        it('it should format the attributes on the root', function () {
            expect(JSONX.stringify(jsonDocument, 'foo')).toEqual(xmlDocument);
        });
    });

});
