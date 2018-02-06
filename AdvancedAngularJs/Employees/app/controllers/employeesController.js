angular.module('app').controller('EmployeesController', [EmployeesController]);


function EmployeesController() {
    var vm = this;
    vm.test = 'testing controllers';
    
    var employees = [
        {
            name: "Iyida Johnson",
            nationality:'Zion',
            date:'1559 - 3015'
        },
        {
            name: "Koman Jones",
            nationality:'France',
            date:'1009 - 1015'
        },
        {
            name: "Linda Ekong",
            nationality:'Calabar',
            date:'1889 - 1889'
        },
        {
            name: "Maria Sule",
            nationality:'Kankari',
            date:'1889 - 1995'
        },
        {
            name: "Muhamad Lovren",
            nationality:'Dubai',
            date:'2001 - 2020'
        },
        {
            name: "Joy Adonu",
            nationality:'Nurami',
            date:'2008 - 2099'
        }
    ];

    vm.show = function(item){
        alert(item);
    };
    vm.employees = employees;
}