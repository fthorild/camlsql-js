/**
 * Tests to encode to internal field names
 */
var camlsql = require("../dist/public_html/js/camlsql.js");

describe("SQL Query #001", function() {

  var expected_xml = '<View><Query><OrderBy><FieldRef Name="Field" /></OrderBy></Query></View>';

  it("Query 1", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY Field", []).getXml();
    expect(result).toEqual(expected_xml);
  });

  it("Query 2", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY [Field]", []).getXml();
    expect(result).toEqual(expected_xml);
  });

}); 

describe("SQL Query #002", function() {

  var expected_xml = '<View><Query><OrderBy><FieldRef Name="Field" Ascending="False" /></OrderBy></Query></View>';

  it("Query 1", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY Field desc", []).getXml();
    expect(result).toEqual(expected_xml);
  });

  it("Query 2", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY [Field] desc", []).getXml();
    expect(result).toEqual(expected_xml);
  });

}); 

describe("SQL Query #003", function() {
    var expected_xml = '<View><Query><OrderBy><FieldRef Name="Field" /><FieldRef Name="Field2" /></OrderBy></Query></View>';

  it("Query 1", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY Field, Field2", []).getXml();
    expect(result).toEqual(expected_xml);
  });

  it("Query 2", function() {
    var result = camlsql.prepare("SELECT * FROM List ORDER BY [Field], Field2", [], []).getXml();
    expect(result).toEqual(expected_xml);
  });

}); 

