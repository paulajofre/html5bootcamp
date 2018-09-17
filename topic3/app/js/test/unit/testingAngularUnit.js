describe('Testing AngularJS Test Suite', function() {
    describe('Testing AngularJS Controller', function() {
        var ctrl;
        var scope = {};

        beforeEach(function() {
            module('topicThree');

            inject(function($controller) {
                ctrl = $controller('topicController', {$scope:scope});
            });
        });

        it('should be instantiated', function() {
            expect(ctrl).toBeDefined();
        });

        it('should initialize the movies in the scope', function() {
            expect(scope.movies).toBeDefined();
        });

        describe('removeMovie method', function() {
            it('should be defined', function() {
                expect(scope.removeMovie).toBeDefined();
            });

            it('should remove "Mulholland Drive" from the movies list', function() {
                var movieToRemove = scope.movies[0];
                scope.removeMovie(movieToRemove);
                expect(scope.movies.indexOf(movieToRemove)).toBe(-1);
            });
        });

        describe('addMovie method', function() {
            it('should add "Terminator II" to the movies list', function() {
                scope.newmovie = {
                    name : 'Terminator II'
                };
                var moviesLength = scope.movies.length;
                scope.addMovie();
                expect(scope.movies.length).toBeGreaterThan(moviesLength);
            });
        });

        describe('editMovie method', function() {
            it('should edit a movie from the movies list', function() {
                scope.editMovie('Amelie');
                expect(scope.current).toBe('Amelie');
            });
        });

        describe('save method', function() {
            it('should save an empty object', function() {
                scope.save();
                expect(scope.current).toEqual({});
            });
        });

    });
});