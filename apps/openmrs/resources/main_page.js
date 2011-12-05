// ==========================================================================
// Project:   Openmrs - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs */

// This page describes the main user interface for your application.  
Openmrs.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: ['patientsView'],
        patientsView: SC.CollectionView.design({
            classNames: ['relative-postion'],
            contentBinding: 'Openmrs.patientsController.arrangedObjects',
            selectionBinding: 'Openmrs.patientsController.selection',
            exampleView: Openmrs.PatientView
        }),
    })
});
