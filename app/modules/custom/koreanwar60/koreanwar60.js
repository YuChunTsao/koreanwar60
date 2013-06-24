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
    return 'Hello World';
  }
  catch (error) {
    alert('koreanwar60_home_page - ' + error);
  }
}

