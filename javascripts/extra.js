"use strict";
/* The following script addes the ability of color in the table
 * To change a cell's background color, surround the text with a 
 * HTML <div> tag with class name being on of the values in the
 * "CLASSNAME_TO_COLOR" objects keys
 * Example: <div class="table-cell-bg-red">Stuff</div>
 */
// A map of html class name classname we wish to add
const CLASSNAME_TO_COLOR = {
    'table-cell-bg-red': 'bg-red',
    'table-cell-bg-yellow': 'bg-yellow',
    'table-cell-bg-green': 'bg-green',
    'table-cell-bg-blue': 'bg-blue',
};

// Dom.ready, IE9+
document.addEventListener('DOMContentLoaded', function() {
    // Populates the parent <td> elements with css properties
    for (const key in CLASSNAME_TO_COLOR) {
        if (CLASSNAME_TO_COLOR.hasOwnProperty(key)) {
            const className = CLASSNAME_TO_COLOR[key];
            let elementsToChange = document.getElementsByClassName(key);
            for (const e of elementsToChange) {
                // Ensuring we are changing a TD
                let parent = e.parentElement;
                if (parent.tagName === 'TD') {
                    parent.classList.add(className)
                }
            }
        }
    }
});

