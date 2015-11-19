# ng-barchart
Simple AngularJS directive for barcharts.
There is no SVG, only HTML and CSS, so you can easely change the design.

<strong>See example in DEMO folder.</strong>

For bug report or feature request please <a href="https://github.com/Gottesk/ng-barchart/issues/new">create a new issue</a>. For faster response provide steps to reproduce/versions with a jsfiddle from here.

#How to use it

Include the 2 files from "dist" directory:

    angular-barchart.css
    angular-barchart.min.js

Add `'angularBarchart'` to your module's list of dependencies.

And then you can simply use it like this:

    <bar-chart data="data"></bar-chart>

The "data" array must be defined in your controller, like this:

    $scope.data = [
        {
            value: 5,
            data: {
                description: 'apples'
            }
        },
        {
            value: 2,
            data: {
                description: 'bananas'
            }
        },
        {
            value: 8,
            data: {
                description: 'oranges'
            }
        },
        {
            value: 6,
            data: {
                description: 'pears'
            }
        }
    ]