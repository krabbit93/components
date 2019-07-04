import 'src/styles/index.scss';

import angular from 'angular';


angular.module("app", []);

angular.bootstrap(
    document.getElementById("main"),
    ["app"],
    {
        strictDi: true,
        ngCloak: true
    }
);