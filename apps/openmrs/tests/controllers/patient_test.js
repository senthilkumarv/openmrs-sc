// ==========================================================================
// Project:   Openmrs.patientController Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs module test ok equals same stop start */

module("Openmrs.patientController");

// TODO: Replace with real unit test for Openmrs.patientController
test("test description", function() {
  	var patient = Openmrs.Patient.create({
		firstName: 'Charles',
		lastName: 'Jolley'
});
  Openmrs.patientController.set('content', patient);
  var expected = patient.get('fullName');
  var result   = Openmrs.patientController.get('fullName');

  equals(result, expected, "test should equal test");
});

