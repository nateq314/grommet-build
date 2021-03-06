import css from 'postcss'; // eslint-disable-line max-len, import/no-extraneous-dependencies

import prettier from 'prettier'; // eslint-disable-line max-len, import/no-extraneous-dependencies

export var createPortal = function createPortal() {
  // make sure to remove all body children
  document.body.innerHTML = '';
  document.body.appendChild(document.createElement('div'));
};
export var expectPortal = function expectPortal(portalId) {
  return {
    toMatchSnapshot: function toMatchSnapshot() {
      var node = document.getElementById(portalId);

      if (node) {
        var styles = css.parse(document.getElementsByTagName('style')[0].innerHTML).root();
        styles.each(function (rule) {
          // skip everything that is not media or rule
          if (['atrule', 'rule'].indexOf(rule.type) < 0 || rule.type === 'atrule' && rule.name !== 'media') {
            rule.remove();
          }

          if (rule.selectors) {
            var selector = rule.selectors.join('');

            if (!Array.from(node.classList).some(function (className) {
              return selector.indexOf(className) >= 0;
            })) {
              rule.remove();
            }
          }
        });
        expect(document.getElementById(portalId)).toMatchSnapshot();
        expect(prettier.format(styles.toString(), {
          parser: 'css'
        }).replace(/\n+$/, '')).toMatchSnapshot();
      } else {
        fail(portalId + " portal does not exist");
      }
    }
  };
};