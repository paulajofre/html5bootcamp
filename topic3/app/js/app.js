var topicThree = angular.module('topicThree', ['ngRoute']);

var movies = [
    {
        name: 'Mulholland Drive',
        description: 'Betty Elms (Naomi Watts), una joven aspirante a actriz, llega a Los Ángeles para convertirse en estrella de cine y se aloja en el apartamento de su tía. Allí conoce a la enigmática Rita (Laura Harring), una mujer que padece amnesia a causa de un accidente sufrido en Mulholland Drive. Las dos juntas deciden investigar quién es Rita y cómo llegó hasta allí.'
    },
    {
        name: 'Amelie',
        description: 'Amelie no es una chica como las demás. Ha visto a su pez de colores deslizarse hacia las alcantarillas municipales, a su madre morir en la plaza de Nôtre-Dame y a su padre dedicar todo su afecto a un gnomo de jardín. De repente, a los veintidós años, descubre su objetivo en la vida: arreglar la vida de los demás. A partir de entonces, inventa toda clase de estrategias para intervenir en los asuntos de los demás: su portera, que se pasa los días bebiendo vino de Oporto; Georgette, una estanquera hipocondríaca, o "el hombre de cristal", un vecino que sólo ve el mundo a través de la reproducción de un cuadro de Renoir.'
    },
    {
        name:'Batman',
        description: 'Nueva adaptación del famoso cómic. Narra los orígenes de la leyenda de Batman y los motivos que lo convirtieron en el representante del Bien en la ciudad de Gotham. Bruce Wayne vive obsesionado con el recuerdo de sus padres, muertos a tiros en su presencia. Atormentado por el dolor, se va de Gotham y recorre el mundo hasta que encuentra a un extraño personaje que lo adiestra en todas las disciplinas físicas y mentales que le servirán para combatir el Mal. Por esta razón, la Liga de las Sombras, una poderosa y subversiva sociedad secreta, dirigida por el enigmático Ras Al Ghul, intenta reclutarlo. Cuando Bruce vuelve a Gotham, la ciudad está dominada por el crimen y la corrupción. Con la ayuda de su leal mayordomo Alfred, del detective de la policía Jim Gordon y de Lucius Fox, su colega en una Sociedad de Ciencias Aplicadas, Wayne libera a su alter ego: Batman, un justiciero enmascarado que utiliza la fuerza, la inteligencia y la más alta tecnología para luchar contra las siniestras fuerzas que amenazan con destruir la ciudad.'
    },
    {
        name: 'Back to the Future',
        description: 'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible.'
    }
];

topicThree.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'details/home.html',
        controller: 'topicController'
    })
    .when('/details/:id', {
        templateUrl: 'details/detail.html',
        controller: 'detailController'
    })
    .otherwise('/');
    
    $locationProvider.html5Mode(true);
}]);

topicThree.controller('topicController', ['$scope', function($scope) {
    $scope.movies = movies;

    $scope.removeMovie = function(movie) {
        var movieRemoved = $scope.movies.indexOf(movie);
        $scope.movies.splice(movieRemoved, 1);
    };

    $scope.addMovie = function() {
        $scope.movies.push({
            name: $scope.newmovie.name
        });
    
        $scope.newmovie.name = "";

    };

    $scope.editMovie = function(movie) {
        $scope.current = movie;
    };

    $scope.save = function(movie){
        $scope.current = {};
    };
}]);

topicThree.controller('detailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    var index = $routeParams.id;
    $scope.movie = movies[index];
}]);

