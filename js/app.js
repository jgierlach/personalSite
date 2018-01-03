$(document).ready(function() {
    var currAnchorLink = null
    var currIndex = null
    var hasRendered = false
    var $contents = $('.content')
    var $navLinks = $('.nav-link')

    var afterRender = function () {
        hasRendered = true
        setTimeout(function () {
          afterLoad(currAnchorLink, currIndex)
        }, 200)
      }

      var afterLoad = function (anchorLink, index) {
        currAnchorLink = anchorLink
        currIndex = index
        if (hasRendered) {
          var $currContent = $($contents[index - 1])
          var $currNavLink = $($navLinks[index - 1])
          $($currContent, $currNavLink).addClass('active')
        }
      }

      var onLeave = function (index, nextIndex, direction) {
        var $lastContent = $($contents[index - 1])
        var $lastNavLink = $($navLinks[index - 1])
        $($lastContent, $lastNavLink).removeClass('active')
      }


	$('#fullpage').fullpage({
        meunu: 'menu',
        lockAnchors: false,
        anchors: [
            'work',
            'resume',
            'contact'
        ],
        afterRender: afterRender,
        afterLoad: afterLoad,
        onLeave: onLeave
    });
});

