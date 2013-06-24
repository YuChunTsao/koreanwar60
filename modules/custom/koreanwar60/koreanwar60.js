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

