// ==========================================================================
// Project:   Openmrs.Patient
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Openmrs.Patient = SC.Record.extend(
/** @scope Openmrs.Patient.prototype */ {
	firstName: SC.Record.attr(String),
	lastName: SC.Record.attr(String),
	loginTime: SC.Record.attr(String),
	photographUrl: SC.Record.attr(String),
	doctorName: SC.Record.attr(String),
	fullName: function() {
		return "%@ %@".fmt(this.get('firstName'), this.get('lastName'));
	}.property('firstName', 'lastName').cacheable()
}) ;
