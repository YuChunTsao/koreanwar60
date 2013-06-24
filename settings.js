/**
 * Specify your DrupalGap's Mobile Application settings here. 
 */
drupalgap.settings = {
  
  /* Paths */
  'site_path':'http://www.koreanwar60.com', /* e.g. http://www.example.com */
  'base_path':'/',
  'default_services_endpoint':'drupalgap',
  'clean_urls':false, /* set to true if you have clean urls enabled on your site */
  
  /* App Information */
  'title':'Korean War 60th Anniversary',
  'front':'kw60_content/home',
  
  /* Language */
  'language':'und',
  
  /* Files */
  'file_public_path':'sites/default/files',
  
  /* Debug */
  'debug':true, /* set to true to see console.log debug information */
  'debug_level':0, /* 0 = mild, 1 = medium (), 2 = spicy () */
  
  /* Theme */
  'theme':'koreanwar60_theme',
  
  /* Logo */
  'logo':'',
  
  /* Blocks */
  'blocks':{
    'koreanwar60_theme':{
      'header':{
        'header':{}
      },
      'navigation':{
        'user_menu_anonymous':{
          'roles':{
            'value':['anonymous user'],
            'mode':'include',
          }
        },
        'user_menu_authenticated':{
          'roles':{
            'value':['authenticated user'],
            'mode':'include',
          }
        }
      },
      'sub_navigation':{
        'main_menu':{},
        'primary_local_tasks':{},
      },
      'content':{
        'main':{}
      },
      'footer':{
        'footer':{}
      },
    },
  },
  
  /* Menus */
  'menus':{
    'main_menu':{
      'links':[
        {'title':'RSVP', 'path':'kw60_content/rsvp'},
        {'title':'Hotels', 'path':'kw60_content/hotels'},
        {'title':'Parking', 'path':'kw60_content/parking'},
        {'title':'Transportation', 'path':'kw60_content/transportation'}
      ],
    },
    /* Region menu links. */
    'regions':{
      'header':{
        'links':[
          /* Home Button */
          {
            'title':'Home',
            'path':'',
            "options":{"attributes":{"data-icon":"home", "class":"ui-btn-left"}},
            "pages":{
              "value":[''],
              "mode":"exclude",
            }
          },
          /* Back Button */
          {
            'title':'Back',
            "options":{
              "attributes":{
                "data-icon":"back",
                "class":"ui-btn-right",
                "onclick":"javascript:drupalgap_back();"
              }
            },
            "pages":{
              "value":[''],
              "mode":"exclude",
            }
          }
        ],
      },
      'footer':{
        'links':[
          /* Info Button */
          {
            'title':'General Info',
            'path':'kw60_content/general_info',
            "options":{
              "attributes":{
                "data-icon":"info",
                "class":"ui-btn-left"
              }
            }
          },
          /* Security Button */
          {
            'title':'Security',
            'path':'kw60_content/security',
            "options":{
              "attributes":{
                "data-icon":"star",
                "class":"ui-btn-right"
              }
            }
          }
        ]
      }
    }
  },
};

/* Custom Modules */
drupalgap.modules.custom = [
  {'name':'koreanwar60'},
];

