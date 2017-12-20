<!--

  Accessabile Menu: https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

-->  

<nav id='mainNav' aria-labelledby="Main Menu">
  <ul role="menubar" aria-label="Main Menu" class="primaryNav">
    <li class='primaryNav--li'>
      <a href='#' aria-haspopup="true" aria-expanded="false" role="memuitem" tabindex="0" class="primaryNav--link">About Us</a>
      <ul role="menu" aria-label="About" class="secondaryNav">
        <li role="none" class="secondaryNav--li">
          <a href="#" role="menuitem" tabindex="-1" class="secondaryNav--link">Overview</a>
        </li>
      </ul>
    </li>
  </ul>
</nav