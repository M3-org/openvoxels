<!DOCTYPE html>
<html lang="dev" class="group/error-page">

<head>
    <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="mobile-web-app-capable" content="yes">
<meta property="og:image" content="https://hackmd.io/images/media/HackMD-neo-og.jpg">
<meta property="og:image:alt" content="HackMD - Collaborative Markdown Knowledge Base">

    <meta property="fb:app_id" content="1436904003272070">

<meta name="csrf-token" content="agGBpYOS-QTeoFf_WFh_U_ZKfOL1fpvYNAaI">
<title>403 Forbidden - HackMD</title>
<link rel="icon" type="image/png" href="https://hackmd.io/favicon.png">
<link rel="apple-touch-icon" href="https://hackmd.io/apple-touch-icon.png">

<!-- Google Tag Manager -->
<script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLW9Z3');</script>
<!-- End Google Tag Manager -->


 <link href="https://assets.hackmd.io/build/font-vendor.ea8218d7d4f468b2c430.css" rel="stylesheet"><link href="https://assets.hackmd.io/build/common-vendor.fd34b1d1ad1390fa8864.css" rel="stylesheet"><link href="https://assets.hackmd.io/build/error-vendor.d073bbf45695cd751410.css" rel="stylesheet"><link href="https://assets.hackmd.io/build/error.40825a88f5078ad7bc8b.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" integrity="sha256-3Jy/GbSLrg0o9y5Z5n1uw0qxZECH7C6OQpVBgNFYa0g=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js" integrity="sha256-g6iAfvZp+nDQ2TdTR/VVKJf3bGro4ub5fvWSWVRi2NE=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js" integrity="sha256-8E4Is26QH0bD52WoQpcB+R/tcWQtpzlCojrybUd7Mxo=" crossorigin="anonymous"></script>
<![endif]-->

<script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
  window.__shouldIgnoreTracker = function() {
    const isDebug = window.debug === true
    const isLocal = /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$|^local\.localhost$/.test(location.hostname) || location.protocol === 'file:'
    const isAutomation = Boolean(window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress)
    return isDebug || isLocal || isAutomation
  }
</script>

<!-- plausible -->
<script defer data-domain="hackmd.io" src="https://tracks.hackmd.io/js/script.js"></script>
<script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
  window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments); }
  const keyboardWhiteList = ['a', 'span', 'button']

  function getTaggedEventAttributes (e) {
    const eventAttrs = { name: null, props: {} }
    if (!e || !e.classList) return eventAttrs
    const psEvent = /plausible-event-(.+)(=|--)(.+)/
    for (const className of [...e.classList]) {
      const [, key, , val] = className.match(psEvent) || []
      if (!key || !val) continue
      const value = val.replace(/\+/g, ' ')
      switch (key.toLowerCase()) {
        case 'name':
          eventAttrs.name = value
          break
        default:
          eventAttrs.props[key] = value
          break
      }
    }
    return eventAttrs
  }

  function shouldIgnore () {
    return window.__shouldIgnoreTracker() || window.localStorage.getItem('plausible_ignore') === 'true'
  }

  function handler (e) {
    if (!window.plausible) return
    if (!e.target || !('className' in e.target)) return
    const ele = e.target

    const eventAttrs = getTaggedEventAttributes(ele)
    if (!eventAttrs.name) return
    if (ele?.href) eventAttrs.props.url = ele.href

    if (shouldIgnore()) {
      if (window.debug) logDebugEventMsg(eventAttrs)
      return
    }
    window.plausible(eventAttrs.name, { props: eventAttrs.props })
  }

  function logDebugEventMsg (eventAttrs) {
    console.warn(
      `Ignoring Event: "${eventAttrs.name}"`,
      eventAttrs,
    )
  }

  function keydownHandler (e) {
    if (e.key !== 'Enter') return
    if (e.target.nodeName.toLowerCase() === 'input') {
      switch (e.target.type.toLowerCase()) {
        case 'submit':
        case 'button':
        case 'reset':
        case 'checkbox':
        case 'radio':
        case 'file':
        case 'image':
        case 'color':
          break
        default:
          return
      }
    } else if (!keyboardWhiteList.includes(e.target.nodeName.toLowerCase())) {
      return
    }
    handler(e)
  }

  document.addEventListener('mousedown', handler)
  document.addEventListener('keydown', keydownHandler)
</script>


    


    <script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
  const remotePreferred = 'dark' || null
  const systemPreferred = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  document.documentElement.setAttribute(
    'theme',
    remotePreferred || systemPreferred
  )
</script>
</head>

<body>
    <nav class="navbar navbar-default navbar-fixed-top unselectable hidden-print font-brand-headline">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        
            <a class="navbar-brand pull-left !text-icon-emphasize" style="float: left;" href="https://hackmd.io/">
                
                <img class="w-6.5 h-auto !inline-block" src="https://hackmd.io/Logo.svg">
                
                HackMD
            </a>
        
    </div>
</nav>

    <div class="flex justify-center">
        <div class="flex gap-8 flex-col items-center mt-[52px]">
            
                <h1 class="text-text-default m-0 text-h1 leading-h1 bold">
    403 Forbidden
</h1>
<div>
    <img class="group-[[theme=light]]/error-page:hidden" src="https://hackmd.io/forbidden.svg">
    <img class="group-[[theme=dark]]/error-page:hidden" src="https://hackmd.io/forbidden-light.svg">
</div>
<p class="text-text-default text-center text-normal leading-normal m-0">
    You don&#39;t have permission to access this resource.
    <br>
    You could head back to home.
</p>

<div class="flex flex-col gap-6 md:flex-row text-lg leading-lg">
    <a type="button" class="ui-home w-[160px] rounded border border-solid border-border-default py-3 text-center text-text-default hocus:bg-element-bg-hover hocus:border-element-border-hover hocus:text-text-emphasize focus:shadow-[0_0_0_2px_#453AFF33] hocus:no-underline" href="https://hackmd.io/">Home</a>
    
        <a type="button" class="ui-signin w-[160px] rounded py-3 bg-background-primary-default text-center text-white hover:bg-background-primary-hover focus:bg-background-primary-focus focus:shadow-[0_0_0_2px_#453AFF33] hocus:text-white hocus:no-underline cursor-pointer" data-toggle="modal" data-target=".signin-modal">
          Sign in
        </a>
    
</div>


            
        </div>
    </div>

    <!-- signin modal -->

<div class="modal fade signin-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-top: 10px; right: 20px; position: absolute;"><span aria-hidden="true">&times;</span></button>
            






    









<h3>Sign in</h3>

<form data-toggle="validator" role="form" class="form-horizontal" method="post" enctype="application/x-www-form-urlencoded" id="signin-form">
    <div class="hmd-dn"><input type="hidden" name="_csrf" value="agGBpYOS-QTeoFf_WFh_U_ZKfOL1fpvYNAaI"></div>
    <div class="hmd-dn"><input type="hidden" name="create_team" value="false"></div>
    <div class="hmd-dn"><input type="hidden" name="create_paid_team" value="false"></div>
    
    <div class="form-group  ">
        <label for="email" class="control-label">Email</label>
        <label for="inputEmail" class="control-label pull-right errors">
            
        </label>
        <span class="help-block control-label with-errors pull-right" style="margin-top: 14px"></span>
        <div class="input-block">
            
                <input type="email" class="form-control" name="email" placeholder="Your email" required autocomplete="email">
            
            <span class="error-sign"></span>
        </div>
    </div>
    <div class="form-group ">
        <label for="password" class="control-label">Password</label>
        <label for="inputPassword" class="control-label pull-right errors">
            
        </label>
        <span class="help-block control-label with-errors pull-right" style="margin-top: 14px"></span>
        <div class="input-block">
            <input type="password" class="form-control" name="password" placeholder="Your password" required autocomplete="current-password" maxlength="128">
            <span class="error-sign"></span>
            
                <span class="control-label pull-right !text-normal !leading-normal !font-normal !mt-1.5"><a href="https://hackmd.io/settings/forgotPassword" style="text-decoration: underline;">Forgot password</a></span>
            
        </div>
    </div>

    <div style="text-align: center; padding-top: 15px; margin-bottom: 0px;">
        <div
            hidden
            id="hmd-captcha"
            data-provider=""
            data-captcha-data=""
            class="flex justify-center"
        ></div>

        
            <input type="submit" class="neo-btn neo-btn-primary !justify-center !py-3.5 !mx-auto w-[180px] text-[18px]" formaction="https://hackmd.io/login" value="Sign in">
        

        
    </div>
</form>














    
        <p class="separator">or</p>
    

    
        <p>By clicking below, you agree to our <a href="https://hackmd.io/s/terms" target="_blank">terms of service</a>.</p>
    

    












<script id="gsi-client" src="https://accounts.google.com/gsi/client" async defer nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b"></script>
<script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
    function handleCredentialResponse(response) {
        const form = document.getElementById('sign-in-with-google-form')
        form.children.credential.value = response.credential
        form.children.method.value = location.href.toLowerCase() === 'https://hackmd.io/settings#general' ? 'merge' : 'login'
        form.submit()
    }
    var GSI_READY = new Promise(function (resolve) {
        function initialize () {
            google.accounts.id.initialize({
                client_id: '911617723593-drikdibvvn63slfd6kbqigo8ql1no55s.apps.googleusercontent.com',
                callback: handleCredentialResponse
            })
            const loginPath = '/login'
            const joinPath = '/join'
            const renderButton = function () {
                google.accounts.id.renderButton(
                    document.getElementById('sign-in-with-google-button'),
                    { type: 'standard', width: 250 }
                )
            }
            if (location.pathname.toLowerCase() === loginPath || location.pathname.toLowerCase() === joinPath) {
                renderButton()
            } else {
                $('.signin-modal').one('shown.bs.modal', function () {
                    renderButton()
                })
            }
            resolve()
        }

        window.addEventListener('load', function () { initialize() })
    })
</script>
<form class="hidden" id="sign-in-with-google-form" action="/auth/google" method="post">
    <input type="hidden" name="credential">
    <input type="hidden" name="method">
    <input type="hidden" name="_csrf" value="agGBpYOS-QTeoFf_WFh_U_ZKfOL1fpvYNAaI">
</form>


<div class="oauth-sign-container">
    
    <div id="sign-in-with-google-button"></div>
    
    
    <a href="https://hackmd.io/auth/facebook" class="btn btn-lg btn-block btn-social btn-facebook">
        <i class="fa fa-facebook"></i> Sign in via Facebook
    </a>
    
    
    <a href="https://hackmd.io/auth/twitter" class="btn btn-lg btn-block btn-social btn-twitter">
        <i class="fa fa-twitter"></i> Sign in via Twitter
    </a>
    
    
    <a href="https://hackmd.io/auth/github" class="btn btn-lg btn-block btn-social btn-github">
        <i class="fa fa-github"></i> Sign in via GitHub
    </a>
    
    
    <a href="https://hackmd.io/auth/dropbox" class="btn btn-lg btn-block btn-social btn-dropbox">
        <i class="fa fa-dropbox"></i> Sign in via Dropbox
    </a>
    
    
    
      <a href="#" class="btn btn-block btn-social btn-web3 bg-gray-800 hocus:bg-[#2b2b2b] text-white hocus:text-white">
          <img src="https://hackmd.io/images/wallet.svg" style="max-height: 20px; margin-top: 8px; margin-left: 6px; border: none;">
          <span class="sign-in-wallet-text">
              Sign in with Wallet
          </span>

          <div class="inline-flex items-center justify-between w-full hidden web3-wallet-info">
              <span>
                   Wallet
                   (
                    <span class="web3-wallet-address"></span>
                   )
              </span>

              <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
      </a>

      <small class="web3-wallet-info hidden text-left hocus:text-white underline hocus:underline block pt-2 ui-disconnect-connected-wallets text-gray-600 cursor-pointer">
          Connect another wallet
      </small>
    
</div>




    <div >
        <p>New to HackMD? <a href="https://hackmd.io/join" class="plausible-event-name=LoginModalSignUp">Sign up</a></p>
    </div>




        </div>
    </div>
</div>

    
    <script src="https://www.googletagmanager.com/gtag/js?id=G-NGVZMM6DR6"></script>
    <script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        let userid = (document.cookie.match('(^|; )userid=([^;]*)')||0)[2];
        gtag('config', 'G-NGVZMM6DR6', {'user_id': userid});
        
    </script>



<script src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js" crossorigin="anonymous"></script>
<script nonce="7478e771-14a0-4df4-bded-b07ff9f16c6b">
  Sentry.init({ dsn: 'https://73410f1915d84abc8b2dd1f1aabd1c82@sentry.hackmd.dev/4', environment: 'production', integrations: function (intrus) { return intrus.filter(function (itr) { return itr.name !== 'TryCatch' }) } });
  const sentryUserId = document.cookie
    .split('; ')
    .map(cookie => cookie.split('='))
    .reduce((acc, [k, v]) => k === 'userid' ? v : acc, '');
  Sentry.setUser(sentryUserId ? { id: sentryUserId } : null);
</script>



<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLW9Z3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


 <script src="https://assets.hackmd.io/build/font-vendor.7631cb852a460f17d568.js" defer="defer"></script><script src="https://assets.hackmd.io/build/common-vendor.3c9a3da9f8a49f6ad878.js" defer="defer"></script><script src="https://assets.hackmd.io/build/error-vendor.ffa537ef3e74311cc8c7.js" defer="defer"></script><script src="https://assets.hackmd.io/build/error-common.c1c5863ab16da6b48c08.js" defer="defer"></script><script src="https://assets.hackmd.io/build/error.33f2a29865744573c199.js" defer="defer"></script>


</body>
</html>
