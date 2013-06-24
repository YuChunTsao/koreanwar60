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
 * Implements hook_menu().
 */
function koreanwar60_menu() {
  try {
    var items = {
      'home':{
        'title':'Home',
        'page_callback':'koreanwar60_home_page'
      },
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

/**
 * Callback for home page.
 */
function koreanwar60_home_page() {
  try {
    var logo_image_path = path_to_theme() + '/images/logo-korean-war-60.png';
    return theme('image', {'path':logo_image_path});
  }
  catch (error) {
    alert('koreanwar60_home_page - ' + error);
  }
}

function koreanwar60_content_page(page) {
  try {
    var page_title = '';
    switch (page) {
      case 'rsvp':
        page_title = 'RSVP';
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
    return drupalgap_file_get_contents(page_file_path);
  }
  catch (error) {
    alert('koreanwar60_content_page - ' + error);
  }
}
