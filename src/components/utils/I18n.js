import I18n from 'i18next';
import Cache from 'i18next-localstorage-cache';
let deepAssign = require('deep-assign');
let modules = requireAll( require.context("../..", true, /lang.*.json$/) );
let languages = {};

modules.map(module => {
                    for (var key in module) {
                        if(languages[key]){
                            languages[key] = deepAssign(languages[key],module[key]);
                        }else{
                            languages[key] = module[key];
                        }
                    }
                });

I18n
  .use(Cache)
  .init({
    initImmediate: true,
    lng: 'fi',
    fallbackLng: false,
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    resources: languages
  });

function requireAll( requireContext ) {
  return requireContext.keys().map( requireContext );
}

export default I18n;