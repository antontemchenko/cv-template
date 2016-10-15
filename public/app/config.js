angular.module('cvApp')
    .constant('config', {
        'template': 'default',
        'lang': 'en'
    })
    .config(['$translateProvider', 'config', function ($translateProvider, config) {
        $translateProvider.translations('en', en);

        $translateProvider.translations('pl', pl);

        $translateProvider.preferredLanguage(config.lang);
    }]);

var en = {
    'name': 'Name',
    'surname': 'Surname',
    'profile': 'Profile',
    'technicalSkills': 'Technical Skills',
    'workExperience': 'Work Experience',
    'education': 'Education',
    'volunteerExperience': 'Volunteer Experience',
    'addInfo': 'Additional Information',
    'langSkills': 'Language Skills'
};

var pl = {
    'name': 'Imię',
    'surname': 'Nazwisko'
};