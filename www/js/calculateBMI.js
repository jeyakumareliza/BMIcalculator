angular.module("myApp", []).controller("myCtrl", function ($scope){
    $scope.calculateBMI = function(){
            
            // get user inputs
            $scope.height = Number(document.getElementById("height").value);
            $scope.heightUnit = document.getElementById("heightUnit").value;
            $scope.weight = Number(document.getElementById("weight").value);
            $scope.weightUnit = document.getElementById("weightUnit").value;

            //convert units to metric
            if((!isNaN($scope.height) && !isNaN($scope.weight)) && ($scope.height != 0 || $scope.weight != 0)){
                if ($scope.heightUnit == "inches")
                    $scope.heightCalc = $scope.height/39.3700787;
                else 
                    $scope.heightCalc = $scope.height / 100;

                if ($scope.weightUnit == "lb")
                    $scope.weightCalc = $scope.weight* 0.45;
                else
                    $scope.weightCalc = $scope.weight;

                //perform calculation
                $scope.bmi = $scope.weightCalc/ Math.pow($scope.heightCalc, 2);
                
                $scope.BMI = document.getElementById("BMI");

                $scope.output = $scope.bmi.toFixed(2);
                $scope.BMI.innerHTML = ("Your calculated BMI: " + $scope.output);

                $scope.msg = document.getElementById("msg");
                if ($scope.output < 18.5){
                    $scope.msg.innerHTML = "Your BMI is under 18.5, you are underweight";
                }
                else if ($scope.output  >= 18.5 && $scope.output  <= 25){
                    $scope.msg.innerHTML = "Your BMI is between 19 - 25, you have a healthy weight";
                }
                else if ($scope.output  >=25 && $scope.output  <= 30){
                    $scope.msg.innerHTML = "Your BMI is between 25 - 30, you are over weight";
                }
                else {
                    $scope.msg.innerHTML = "Your BMI is over 30, you are obese";
                }
            }
            else{
                document.getElementById("height").style.borderColor = "red";
                document.getElementById("weight").style.borderColor = "red";
            }            
        }

});