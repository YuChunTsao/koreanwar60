/**
 * Implements DrupalGap's template_info() hook.
 */
function koreanwar60_theme_info() {
  try {
    var theme = {
      "name":"koreanwar60_theme",
      "regions":{
        "header":{
          "attributes":{
            "data-role":"header"
          }
        },
        "navigation":{
          "attributes":{
            "data-role":"navbar"
          }
        },
        "sub_navigation":{
          "attributes":{
            "data-role":"navbar"
          }
        },
        "content":{
          "attributes":{
            "data-role":"content"
          }
        },
        "footer":{
          "attributes":{
            "data-role":"footer"
          }
        }
      }
    };
    return theme;
  }
  catch (error) {
    alert('koreanwar60_theme_info - ' + error);
  }
}
