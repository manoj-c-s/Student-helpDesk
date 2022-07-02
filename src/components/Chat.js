import React from "react";
import SimpleForm from "./SimpleForm";

function Chat() {
  
  //     (function(d, m){
  //         var kommunicateSettings =
  //             {"appId":"de170bacabb3632852e493c91b9047b2","popupWidget":true,"automaticChatOpenOnNavigation":true};
  //         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //         window.kommunicate = m; m._globals = kommunicateSettings;
  //     })(document, window.kommunicate || {});
  // /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

  return (
    <div>
      <SimpleForm />
    </div>
  );
}

export default Chat;
