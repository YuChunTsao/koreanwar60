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
  
  /* Cache - Set to true when publishing app!*/
  'cache':{
    'theme_registry':true,
  },
  
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
      'content_suffix':{
        'footer_menu':{}
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
        {'title':'Events', 'path':'kw60_content/events', options:{attributes:{"data-icon":"grid"}}},
        {'title':'Hotels', 'path':'kw60_content/hotels', options:{attributes:{"data-icon":"grid"}}},
        {'title':'Parking', 'path':'kw60_content/parking', options:{attributes:{"data-icon":"grid"}}},
        {'title':'Transportation', 'path':'kw60_content/transportation', options:{attributes:{"data-icon":"grid"}}}
      ],
      "data-theme":"c"
    },
    /* Region menu links. */
    'regions':{
      'header':{
        'links':[
          /* Home Button */
          {
            'title':'Home',
            'path':'',
            "options":{
              "attributes":{
                "data-icon":"home",
                "class":"ui-btn-left",
                "data-theme":"b"
              }
            },
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
                "onclick":"javascript:drupalgap_back();",
                "data-theme":"b"
              }
            },
            "pages":{
              "value":[''],
              "mode":"exclude",
            }
          }
        ],
      }
    }
  },
};

/* Custom Modules */
drupalgap.modules.custom = [
  {'name':'koreanwar60'},
];

