// ==========================================================================
// Project:   Openmrs.Patient Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs module test ok equals same stop start */

module("Openmrs.Patient");

// TODO: Replace with real unit test for Patient
test("test description", function() {
  var expected = "Charles Jolley";
  
  var patient = Openmrs.Patient.create({
	firstName: 'Charles',
	lastName: 'Jolley'
  });
  var result   = patient.get('fullName');

  equals(result, expected, "test should equal test");
});

