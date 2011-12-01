// ==========================================================================
// Project:   Openmrs.PatientView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Openmrs.PatientView = SC.View.extend( {
	childViews: ['patientNameLabel', 'doctorNameLabel', 'loginTimeLabel', 'patientIdLabel', 'patientImage'],
	classNames: ['patient-view', 'relative-view'],
	patientNameLabel: SC.LabelView.design({
	  layout: {top:0, width:200, height: 20},
	  valueBinding: 'Openmrs.patientController.fullName',
	  classNames: ['relative-view']
	}),
	doctorNameLabel: SC.LabelView.design({
	  layout: {top:30,width:200},
	  valueBinding: 'Openmrs.patientController.doctorName',
	  classNames: ['relative-view']
	}),
	loginTimeLabel: SC.LabelView.design({
	  layout: {top:60,width:200},
	  valueBinding: 'Openmrs.patientController.loginTime',
	  classNames: ['relative-view']
	}),
	patientIdLabel: SC.LabelView.design({
	  layout: {top:90,width:200},
	  valueBinding: 'Openmrs.patientController.id',
	  classNames: ['relative-view']
	}),
	patientImage: SC.ImageView.design({
	  layout: { top:120,width:200 },
	  value: 'Class name or URL',
	  classNames: ['relative-view']
	})
});
