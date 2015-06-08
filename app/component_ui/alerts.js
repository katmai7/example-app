'use strict';

define(

  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(alerts);

    function alerts() {

      // this.defaultAttrs({
      //   selectionChangedEvent: 'uiMoveToSelectionChanged',
      //   selectedMailItems: [],
      //   selectedFolders: [],
      //   //selectors
      //   itemSelector: 'li.move-to-item',
      //   selectedItemSelector: 'li.move-to-item.selected'
      // });

      this.show = function(ev, data) {
        window.alert(data.msg);
      };

      this.after('initialize', function() {
        //show selector widget
        this.on(document, 'alerts:show', this.show);
      });
    }
  }
);