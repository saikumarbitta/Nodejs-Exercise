app.controller('testController', function($scope, $http) {

 $scope.skillList = [];
 $scope.showAdd = false;
 $scope.addSkills = {
  "id": "",
  "name": "",
  "status": null
 }
     $scope.getlist = function() {
      $http.get('http://localhost:4000/api/skills').then(function(res) {
    console.log("response"+res);
    $scope.skillList = res.data; 
 });
     }
     $scope.getlist();

/***************************************************************************************

            Please refer below angular code for calling apis

***************************************************************************************/

//search skill
 $scope.searchSkill = function(search) {
    console.log("search"+search);
   $http
    .post('http://localhost:4000/api/skills/search', { search: search})
    .then(function(res) {
    $scope.skillList = res.data;
    });
  }
  //Add skill
  $scope.addSkill = function(name,status) {
    console.log("name"+name+"status"+status);
   $http
    .post('http://localhost:4000/api/skills', { name: name, status: status })
    .then(function(res) {
      alert('Skill added successfully!');
      $scope.getlist();
      $scope.addSkills = {};
    });
  }

//edit skill

  $scope.changeSkill = function(id,name) {
    $http
      .put('http://localhost:4000/api/skills/'+ id +'/update', { name: name })
      .then(function(res) {
        alert('Skill updated Successfully');
      });
    $scope.openEdit = false;
$scope.getlist();
  }


  //Change Status

  $scope.changeStatus = function(id, status){
    //Approve 
    console.log("status"+status+"id"+id);
    $http
      .put('http://localhost:4000/api/skills/'+ id +'/approve', { status: status })
      .then(function(res) {
        alert('This skill is ' + (status === '1' ? 'Approved' : 'Rejected'));
       $scope.getlist();
      });   
  }

})