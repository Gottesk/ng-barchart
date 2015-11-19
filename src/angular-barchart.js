/**!
 * AngularJS lightweight barchart directive
 * @author  Dmitriy  <dmitriy.lopukhov@gmail.com>
 * @version 1.0
 * License: MIT
 */
(function() {
    var angularBarchart = angular.module('angularBarchart', []);

    angularBarchart.directive('barChart', ['$timeout',
            function ($timeout) {
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        data: "=data",
                        barModel: "="
                    },
                    template: '{html}',
                    link: function (scope, element) {


                        scope.getMaxBarHeight = function(data) {
                            var maxHeight = 0;
                            var arrMax =[];
                            for (var i=0; i<data.length; i++) {
                                arrMax.push(data[i].value);
                            }
                            maxHeight = Math.max.apply(Math, arrMax);

                            return maxHeight;
                        };

                        scope.drawBars = function () {
                            for (var i=0; i<scope.data.length; i++) {
                                scope.data[i].barHeight = 0;
                            }
                            $timeout(function () {
                                for (var i=0; i<scope.data.length; i++) {
                                    scope.data[i].barHeight = scope.data[i].value*100/scope.maxBarHeight;
                                }
                            });
                        };

                        scope.init = function () {
                            scope.barContainerHeight = element[0].offsetHeight;
                            scope.barWidth = 100/scope.data.length;
                            scope.maxBarHeight = scope.getMaxBarHeight(scope.data);
                            scope.drawBars();
                        };

                        scope.$watchCollection('data', function () {
                            if (scope.data && scope.data.length!==0) {
                                scope.init();
                            }
                        });

                        scope.barItemClick = function (item) {
                            if (scope.barModel) {
                                var _temp = angular.copy(item);
                                delete _temp.barHeight;
                                scope.barModel = _temp;
                            }
                        };

                        scope.getBarBackgorundStyle = function () {
                            return {
                                'width': scope.barWidth + "%"
                            }
                        };

                        scope.getBarStyle = function (item) {
                            return {
                                'height': item.barHeight + '%'
                            }
                        };

                        scope.getBarTooltipStyle = function (item) {
                            return {
                                'bottom': scope.barContainerHeight + 5 + 'px'
                            }
                        };
                    }
                }
            }
        ]
    );
})();