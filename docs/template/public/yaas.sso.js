function sso(builderUrl) {

  var _ssoSettings = {
    "builderUrl" : "https://builder.yaas.io"
    // Use http://dev.local:8443 for local builder instance
  };

    if(builderUrl){
      _ssoSettings.builderUrl = builderUrl;
    } else { console.log('Using Prod for SSO'); }


    // SSO
    YaasAuth.init(_ssoSettings.builderUrl , function () {
       //token_expired_callback
       setLoginInfo('', false);

    });

    YaasAuth.getSessionInfo(function (sessionInfo) {
        // token_present_callback
        setLoginInfo(sessionInfo, true);
    },function () {
        // token_missing_callback
        setLoginInfo('', false);
    });

    // Toggle Viewstate
    function setLoginInfo(sessionInfo, loginState){

      if(loginState == true){
        $('.profile-email').html(sessionInfo.login);
        $('.account-overlay-logged-in').show();
        $('.account-overlay-login').hide(); 

      }
      if(loginState == false){
       $('.profile-email').empty();
       $('.account-overlay-login').show(); 
       $('.account-overlay-logged-in').hide();
      } 
    };

    // SIGNOUT
    $('.sign-out').on('click', function(e){
      YaasAuth.logout();
      setLoginInfo('', false);
    });

}