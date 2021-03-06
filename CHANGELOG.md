# Changelog

## 2.2.1

### Bug fixes
* The issue in `checkbox` which leads to impossible toggle by click in most browsers was fixed ([#1538](https://github.com/bem/bem-components/issues/1538)).

## 2.2.0

### Bug fixes
* The issue in `select` which prevented it to be opened with `space` button was fixed ([#1486](https://github.com/bem/bem-components/issues/1486)).
* The issue in `checkbox` on touch devices was fixed ([#1472](https://github.com/bem/bem-components/issues/1472)).

### Other changes
* Now there is an ability to prevent native behaviour in `link` block ([#1485](https://github.com/bem/bem-components/issues/1485)).
* Additional check for existance of a group in templates of `menu` was added ([#1513](https://github.com/bem/bem-components/issues/1513)).
* BH bundles in `dist` now mimic to BEMHTML ([#1530](https://github.com/bem/bem-components/issues/1530)).
* Small fixes in documentation were added.

## 2.1.1

### Bug fixes
* The regression of keyboard support in `select` was fixed ([#1456](https://github.com/bem/bem-components/issues/1456)).

### Other changes
* Now the `val` field is assigned to zero in `progressbar` by default ([#1468](https://github.com/bem/bem-components/issues/1468)).
* Description of `button_view_plain` was added to documentation ([#1454](https://github.com/bem/bem-components/issues/1454)).

## 2.1.0

### Major changes

* Optional support for Internet Explorer 8 in graceful degradation way was implemented ([#1205](https://github.com/bem/bem-components/issues/1205)). For more info please refer [notes in README](/README.md#support-ie8).
* `bem-core` dependency was updated to [2.6.0](https://github.com/bem/bem-core/blob/v2/CHANGELOG.md#260).


### Bug fixes

* An issue with resize in `textarea` block was fixed ([#1330](https://github.com/bem/bem-components/issues/1330)).
* An issue with `select` transition which led to scrollbars flash was fixed ([#1323](https://github.com/bem/bem-components/issues/1323)).
* Controls highlight on touch devices was removed ([#1390](https://github.com/bem/bem-components/issues/1390)).
* Appearance of `button_view_plain` in disabled state was fixed ([#1378](https://github.com/bem/bem-components/issues/1378)).
* An issue with `input` block behaviour in Chrome was fixed ([#1382](https://github.com/bem/bem-components/issues/1382)).
* An issue with visible content of hidden `modal` was fixed ([#1372](https://github.com/bem/bem-components/issues/1372)).
* An issue with extra bounding to `keydown` handler in `menu` block was fixed ([#1381](https://github.com/bem/bem-components/issues/1381)).
* Event propagation in `select` block when `escape` is pressed is now stopped ([#1367](https://github.com/bem/bem-components/issues/1367)).
* `link` inside disabled `menu-item_type_link` is now disabled as well ([#1353](https://github.com/bem/bem-components/issues/1367)).

### Other changes

* Ability to use modifier `_width_available` in `input`, `select` and `textarea` without theme was added ([#1404](https://github.com/bem/bem-components/issues/1404)).
* Config to build library distribution was improved ([#1411](https://github.com/bem/bem-components/issues/1411)).
* `menu` block will throw descriptive error in case of wrong content provided ([#1320](https://github.com/bem/bem-components/issues/1320)).
* Documentation was updated.
