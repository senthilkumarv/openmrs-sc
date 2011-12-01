// ==========================================================================
// Project:   Openmrs - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Openmrs */

// This page describes the main user interface for your application.  
Openmrs.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page 
    // load.
    mainPane: SC.MainPane.design({
        childViews: ['patientsView'],
        patientsView: SC.CollectionView.design({
            layout: {
                top: 0,
                left: 0,
                bottom: 0,
                width: 600
            },
            contentBinding: 'Openmrs.patientsController.arrangedObjects',
            selectionBinding: 'Openmrs.patientsController.selection',
            exampleView: SC.WellView.design({
				contentView: Openmrs.PatientView.design(),
			})
        }),
        /*  patientView: SC.WellView.design({
			
            contentView: Openmrs.PatientView.design({

            }),
			top: 50,
            left: 70,
            width: 200,
            height: 400
        })*/
    })
});
