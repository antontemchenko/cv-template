angular.module('cvApp')
    .constant('config', {
        'template': 'default',
        'lang': new URLSearchParams(window.location.search.slice(1)).get('lang') || 'en'
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
    'langSkills': 'Language Skills',
    'hobbies': 'Hobbies and interests'
};

var pl = {
    'name': 'Imię',
    'surname': 'Nazwisko',
    'profile': 'Profil',
    'technicalSkills': 'Umiejętności',
    'workExperience': 'Doświadczenie zawodowe',
    'education': 'Wykształcenie',
    'volunteerExperience': 'Wolontariat',
    'addInfo': 'Dodatkowe informacje',
    'langSkills': 'Znajomość języków',
    'hobbies': 'Zainteresowania'
};