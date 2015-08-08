/**
 * Toolkit JavaScript
 */

'use strict';
var $ = require('jquery');

//Define Tabber Function
var tabber = function(triggerContainer, panelContainer, callback){

    //Find the triggers within the specified triggerContainer
    var triggers = $(triggerContainer).find('[data-tab-trigger]');

    //Find the triggers within the specified panelContainer
    var panels = $(panelContainer).find('[data-tab-panel]');

    //Bind a click event to the trigger
    $(triggers).on('click', function(e){

        //Prevent default action (clickthrough)
        e.preventDefault();

        //Find the name of the panel to activate
        var panelName = $(this).attr('data-tab-trigger');

        //Remove the active class from the triggers not clicked
        $(triggers).not(this).removeClass('active');

        //Add the active class to the trigger clicked
        $(this).addClass('active');

        //Find the panel that we want to be visible using the panelName
        var activatedPanel = $(panelContainer).find('[data-tab-panel="' + panelName + '"]');

        //Remove the active class from the panels not to be activated
        $(panels).not(activatedPanel).removeClass('active');

        //Add the active class to the panel to be activated
        $(activatedPanel).addClass('active');

        //Optional callback
        if(callback){

            callback();

        }

    });

};

$(document).ready(function(){tabber('[data-tabs]', '[data-tabs]');});
