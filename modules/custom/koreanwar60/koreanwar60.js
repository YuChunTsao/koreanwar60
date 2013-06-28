/**
 * Implements hook_deviceready().
 */
function koreanwar60_deviceready() {
 try {
   // Since we were not able to get the Services module to function properly on
   // the live site, we'll prevent the deviceready from continuing. This App
   // is just a static app since no services are available!
   return false;
 }
 catch (error) {
   alert('koreanwar60_deviceready - ' + error);
 }
}

/**
 * Implements hook_block_info().
 */
function koreanwar60_block_info() {
  var blocks = {
    'footer_menu':{
      'delta':'footer_menu',
      'module':'koreanwar60',
    },
    'footer':{
      'delta':'footer',
      'module':'koreanwar60',
    },
  };
  return blocks;
}

/**
 * Implements hook_block_view().
 */
function koreanwar60_block_view(delta) {
  var content = '';
  if (delta == 'footer') {
    content = '<h2>60th Anniversary</h2>';
  }
  else if (delta == 'footer_menu') {
    var items = [];
    items.push(l('General Info','kw60_content/general_info', {attributes:{'data-icon':'info'}}));
    items.push(l('Security','kw60_content/security', {attributes:{'data-icon':'star'}}));
    return theme('item_list', {'items':items});
  }
  return content;
}
 
/**
 * Implements hook_menu().
 */
function koreanwar60_menu() {
  try {
    var items = {
      'kw60_content/%':{
        'page_callback':'koreanwar60_content_page',
        'page_arguments':[1]
      }
    };
    return items;
  }
  catch (error) {
    alert('koreanwar60_menu - ' + error);
  }
}

function koreanwar60_content_page(page) {
  try {
    var page_title = '';
    switch (page) {
      case 'home':
        page_title = 'Korean War';
        break;
      case 'events':
        page_title = 'Events';
        break;
      case 'hotels':
        page_title = 'Hotels';
        break;
      case 'parking':
        page_title = 'Parking';
        break;
      case 'transportation':
        page_title = 'Transportation';
        break;
      case 'security':
        page_title = 'Security';
        break;
      case 'general_info':
        page_title = 'General Info';
        break;
      default:
        return 'koreanwar60_content_page - unknown page (' + page + ')';
        break;
    }
    drupalgap_set_title(page_title);
    var page_file_path = drupalgap_get_path('module', 'koreanwar60') + '/pages/' + page + '.html';
    var options = {};
    if (!drupalgap.settings.cache.theme_registry) {
      options.cache = false;
    }
    return drupalgap_file_get_contents(page_file_path, options);
  }
  catch (error) {
    alert('koreanwar60_content_page - ' + error);
  }
}
