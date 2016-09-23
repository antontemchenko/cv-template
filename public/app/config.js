angular.module('cvApp')
    .constant('config', {
        'template': 'material',
        'lang': 'en'
    })
    .config(['$translateProvider', 'config', function ($translateProvider, config) {
        $translateProvider.translations('en', en);

        $translateProvider.translations('pl', pl);

        $translateProvider.preferredLanguage(config.lang);
    }]);

var en = {
    'name': 'Name',
    'surname': 'Surname'
};

var pl = {
    'name': 'Imię',
    'surname': 'Nazwisko'
};