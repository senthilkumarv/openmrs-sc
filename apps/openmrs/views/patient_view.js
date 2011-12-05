// ==========================================================================
// Project:   Openmrs.PatientView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Openmrs.PatientView = SC.View.extend(SC.StaticLayout, {
    childViews: ['patientNameLabel', 'doctorNameLabel', 'loginTimeLabel', 'patientIdLabel'],
    classNames: ['patient-view'],
    useStaticLayout: YES,
    patientNameLabel: SC.LabelView.design({
        layout: {
            top: 10,
            width: 200
        },
        valueBinding: 'Openmrs.patientController.fullName'
    }),
    doctorNameLabel: SC.LabelView.design({
        layout: {
            top: 25,
            width: 200
        },
        valueBinding: 'Openmrs.patientController.doctorName'
    }),
    loginTimeLabel: SC.LabelView.design({
        layout: {
            top: 40,
            width: 200
        },
        valueBinding: 'Openmrs.patientController.loginTime'
    }),
    patientIdLabel: SC.LabelView.design({
        layout: {
            top: 55,
            width: 200
        },
        valueBinding: 'Openmrs.patientController.id'
    }),
    patientImage: SC.ImageView.design({
        layout: {
            width: 200
        },
        value: 'Class name or URL'
    })
});
