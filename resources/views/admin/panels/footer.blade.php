<!-- BEGIN: Footer-->
<footer
  class="{{$configData['mainFooterClass']}} @if($configData['isFooterFixed']=== true){{'footer-fixed'}}@else {{'footer-static'}} @endif @if($configData['isFooterDark']=== true) {{'footer-dark'}} @elseif($configData['isFooterDark']=== false) {{'footer-light'}} @else {{$configData['mainFooterColor']}} @endif">
  <div class="footer-copyright">
    <div class="container">
      <span>Created and developed by<a href="https://insite.ge"
          target="_blank"> Insite International</a>.
      </span>
      <span class="right hide-on-small-only">
      </span>
    </div>
  </div>
</footer>

<!-- END: Footer-->