(function() {
    'use strict';
    angular.module ('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.inject = [ '$scope' ];
    function LunchCheckController ( $scope ) {
        $scope.input_string = "";
        $scope.output_string = "";
        $scope.myColor = "";
        $scope.myBorderColor = "";
        
        $scope.checkString = function() {
            var count = 0;
            var str = $scope.input_string;
            var words = str.split(',');
            for ( var i = 0; i < words.length ; i++ ) {
                if ( words[i].length != 0 ) {
                    count += 1;
                }
            }
            if ( count == 0 ) {
                $scope.output_string = "Please enter data first";
                $scope.myColor = "red";
                $scope.myBorderColor = "red";
            } else if ( count <= 3) {
                $scope.output_string = "Enjoy!";
                $scope.myColor = "green";
                $scope.myBorderColor = "green";
            } else {
                $scope.output_string = "Too much!";
                $scope.myColor = "green";
                $scope.myBorderColor = "green";
            }
        }

    };
})();