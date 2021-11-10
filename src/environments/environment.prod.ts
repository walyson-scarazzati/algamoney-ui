export const environment = {
  production: true,
  apiUrl: 'https://algamoney-api-treinamento.herokuapp.com',

  tokenAllowedDomains: [ new RegExp('algamoney-api-treinamento.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
