/**
 * Created by tomer on 1/19/16.
 */
app.directive('answer', function () {
    return {
        scope: {
            val: "="
        },
        templateUrl: 'directives/answer.html'
    };
});