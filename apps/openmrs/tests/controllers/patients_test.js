// ==========================================================================
// Project:   Openmrs.patientsController Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs module test ok equals same stop start */

module("Openmrs.patientsController");

// TODO: Replace with real unit test for Openmrs.patientsController
test("test description",
function() {
    var expected = 5;
    var patients = Openmrs.store.find(Openmrs.Patient);
    Openmrs.patientsController.set('content', patients);

    var result = Openmrs.patientsController.get('length');

    equals(result, expected, "test should equal test");
});
