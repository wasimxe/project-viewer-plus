'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _etch = require('etch');

var _etch2 = _interopRequireDefault(_etch);

var _atomSelectList = require('atom-select-list');

var _atomSelectList2 = _interopRequireDefault(_atomSelectList);

var _devlog = require('./../services/devlog');

var _devlog2 = _interopRequireDefault(_devlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** @jsx etch.dom */

/**
 *
 */
let SelectListContainer = class SelectListContainer {

  /**
   *
   */
  constructor() {
    if (SelectListContainer.instance) {
      return SelectListContainer.instance;
    }
    SelectListContainer.instance = this;

    this.setItems();
    _etch2.default.initialize(this);
  }

  /**
   *
   * @returns {boolean} description
   */
  get selectQuery() {
    return true;
  }

  /**
   *
   * @returns {string} description
   */
  get emptyMessage() {
    return 'No projects found :(';
  }

  /**
   *
   * @param {string} item - description
   * @returns {string} description
   */
  filterKeyForItem(item) {
    return item.name;
  }

  /**
   *
   */
  show() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!_this.panel) {
        _this.panel = yield atom.workspace.addModalPanel({
          item: _this.element,
          visible: false,
          autoFocus: true
        });
      }

      if (_this.panel.isVisible()) {
        _this.panel.hide();
      } else {
        _this.panel.show();
        _this.focus();
      }
    })();
  }

  /**
   *
   * @param {Array} items - description
   */
  setItems(items) {
    this.items = !items ? [] : items.ids.map(id => {
      const candidate = items.map[id];
      if (candidate.type === 'project') {
        return candidate.model;
      }
    }).filter(model => model);

    this.update(this);
  }

  /**
   *
   * @param {*} item - description
   * @returns {Object} An HTMLElement
   */
  elementForItem(item) {
    const element = document.createElement('li');
    element.textContent = item.name;
    return element;
  }

  /**
   *
   * @param {*} item - description
   */
  didConfirmSelection(item) {
    (0, _devlog2.default)('didConfirmSelection', item);
    this.panel.hide();
  }

  /**
   *
   */
  didCancelSelection() {
    (0, _devlog2.default)('didCancelSelection');
    this.panel.hide();
  }

  /**
   *
   */
  focus() {
    (0, _devlog2.default)(this);
    this.element.focus();
  }

  /**
   *
   * @param {Object} props - description
   * @returns {Object} description
   */
  update(props) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.props = props;
      return _etch2.default.update(_this2);
    })();
  }

  /**
   *
   */
  destroy() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      _this3.panel.destroy();
      yield _etch2.default.destroy(_this3);
    })();
  }

  /**
   *
   * @returns {Object} description
   */
  render() {
    return _etch2.default.dom(_atomSelectList2.default, this);
  }
};
exports.default = SelectListContainer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb250YWluZXJzL3NlbGVjdC1saXN0LmpzIl0sIm5hbWVzIjpbIlNlbGVjdExpc3RDb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlIiwic2V0SXRlbXMiLCJpbml0aWFsaXplIiwic2VsZWN0UXVlcnkiLCJlbXB0eU1lc3NhZ2UiLCJmaWx0ZXJLZXlGb3JJdGVtIiwiaXRlbSIsIm5hbWUiLCJzaG93IiwicGFuZWwiLCJhdG9tIiwid29ya3NwYWNlIiwiYWRkTW9kYWxQYW5lbCIsImVsZW1lbnQiLCJ2aXNpYmxlIiwiYXV0b0ZvY3VzIiwiaXNWaXNpYmxlIiwiaGlkZSIsImZvY3VzIiwiaXRlbXMiLCJpZHMiLCJtYXAiLCJpZCIsImNhbmRpZGF0ZSIsInR5cGUiLCJtb2RlbCIsImZpbHRlciIsInVwZGF0ZSIsImVsZW1lbnRGb3JJdGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkaWRDb25maXJtU2VsZWN0aW9uIiwiZGlkQ2FuY2VsU2VsZWN0aW9uIiwicHJvcHMiLCJkZXN0cm95IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzsyY0FKQTs7QUFNQTs7O0lBR01BLG1CLEdBQU4sTUFBTUEsbUJBQU4sQ0FBMEI7O0FBSXhCOzs7QUFHQUMsZ0JBQWU7QUFDYixRQUFJRCxvQkFBb0JFLFFBQXhCLEVBQWtDO0FBQ2hDLGFBQU9GLG9CQUFvQkUsUUFBM0I7QUFDRDtBQUNERix3QkFBb0JFLFFBQXBCLEdBQStCLElBQS9COztBQUVBLFNBQUtDLFFBQUw7QUFDQSxtQkFBS0MsVUFBTCxDQUFnQixJQUFoQjtBQUNEOztBQUVEOzs7O0FBSUEsTUFBSUMsV0FBSixHQUFtQjtBQUNqQixXQUFPLElBQVA7QUFDRDs7QUFFRDs7OztBQUlBLE1BQUlDLFlBQUosR0FBb0I7QUFDbEIsV0FBTyxzQkFBUDtBQUNEOztBQUVEOzs7OztBQUtBQyxtQkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU9BLEtBQUtDLElBQVo7QUFDRDs7QUFFRDs7O0FBR01DLE1BQU4sR0FBYztBQUFBOztBQUFBO0FBQ1osVUFBSSxDQUFDLE1BQUtDLEtBQVYsRUFBaUI7QUFDZixjQUFLQSxLQUFMLEdBQWEsTUFBTUMsS0FBS0MsU0FBTCxDQUFlQyxhQUFmLENBQTZCO0FBQzlDTixnQkFBTSxNQUFLTyxPQURtQztBQUU5Q0MsbUJBQVMsS0FGcUM7QUFHOUNDLHFCQUFXO0FBSG1DLFNBQTdCLENBQW5CO0FBS0Q7O0FBRUQsVUFBSSxNQUFLTixLQUFMLENBQVdPLFNBQVgsRUFBSixFQUE0QjtBQUMxQixjQUFLUCxLQUFMLENBQVdRLElBQVg7QUFDRCxPQUZELE1BR0s7QUFDSCxjQUFLUixLQUFMLENBQVdELElBQVg7QUFDQSxjQUFLVSxLQUFMO0FBQ0Q7QUFmVztBQWlCYjs7QUFFRDs7OztBQUlBakIsV0FBVWtCLEtBQVYsRUFBaUI7QUFDZixTQUFLQSxLQUFMLEdBQWEsQ0FBQ0EsS0FBRCxHQUFTLEVBQVQsR0FBY0EsTUFBTUMsR0FBTixDQUFVQyxHQUFWLENBQWNDLE1BQU07QUFDN0MsWUFBTUMsWUFBWUosTUFBTUUsR0FBTixDQUFVQyxFQUFWLENBQWxCO0FBQ0EsVUFBSUMsVUFBVUMsSUFBVixLQUFtQixTQUF2QixFQUFrQztBQUNoQyxlQUFPRCxVQUFVRSxLQUFqQjtBQUNEO0FBQ0YsS0FMMEIsRUFLeEJDLE1BTHdCLENBS2pCRCxTQUFTQSxLQUxRLENBQTNCOztBQU9BLFNBQUtFLE1BQUwsQ0FBWSxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0FDLGlCQUFnQnRCLElBQWhCLEVBQXNCO0FBQ3BCLFVBQU1PLFVBQVVnQixTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0FqQixZQUFRa0IsV0FBUixHQUFzQnpCLEtBQUtDLElBQTNCO0FBQ0EsV0FBT00sT0FBUDtBQUNEOztBQUVEOzs7O0FBSUFtQixzQkFBcUIxQixJQUFyQixFQUEyQjtBQUN6QiwwQkFBTyxxQkFBUCxFQUE4QkEsSUFBOUI7QUFDQSxTQUFLRyxLQUFMLENBQVdRLElBQVg7QUFDRDs7QUFFRDs7O0FBR0FnQix1QkFBc0I7QUFDcEIsMEJBQU8sb0JBQVA7QUFDQSxTQUFLeEIsS0FBTCxDQUFXUSxJQUFYO0FBQ0Q7O0FBRUQ7OztBQUdBQyxVQUFTO0FBQ1AsMEJBQU8sSUFBUDtBQUNBLFNBQUtMLE9BQUwsQ0FBYUssS0FBYjtBQUNEOztBQUVEOzs7OztBQUtNUyxRQUFOLENBQWNPLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTtBQUNuQixhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFPLGVBQUtQLE1BQUwsUUFBUDtBQUZtQjtBQUdwQjs7QUFFRDs7O0FBR01RLFNBQU4sR0FBaUI7QUFBQTs7QUFBQTtBQUNmLGFBQUsxQixLQUFMLENBQVcwQixPQUFYO0FBQ0EsWUFBTSxlQUFLQSxPQUFMLFFBQU47QUFGZTtBQUdoQjs7QUFFRDs7OztBQUlBQyxXQUFVO0FBQ1IsV0FDRSw2Q0FBZ0IsSUFBaEIsQ0FERjtBQUdEO0FBN0l1QixDO2tCQWdKWHRDLG1CIiwiZmlsZSI6InNlbGVjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggZXRjaC5kb20gKi9cblxuaW1wb3J0IGV0Y2ggZnJvbSAnZXRjaCc7XG5pbXBvcnQgU2VsZWN0TGlzdCBmcm9tICdhdG9tLXNlbGVjdC1saXN0JztcbmltcG9ydCBkZXZsb2cgZnJvbSAnLi8uLi9zZXJ2aWNlcy9kZXZsb2cnO1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIFNlbGVjdExpc3RDb250YWluZXIge1xuXG4gIHN0YXRpYyBpbnN0YW5jZTtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoU2VsZWN0TGlzdENvbnRhaW5lci5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIFNlbGVjdExpc3RDb250YWluZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIFNlbGVjdExpc3RDb250YWluZXIuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICAgIGV0Y2guaW5pdGlhbGl6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gZGVzY3JpcHRpb25cbiAgICovXG4gIGdldCBzZWxlY3RRdWVyeSAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICovXG4gIGdldCBlbXB0eU1lc3NhZ2UgKCkge1xuICAgIHJldHVybiAnTm8gcHJvamVjdHMgZm91bmQgOignO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtIC0gZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICovXG4gIGZpbHRlcktleUZvckl0ZW0gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBzaG93ICgpIHtcbiAgICBpZiAoIXRoaXMucGFuZWwpIHtcbiAgICAgIHRoaXMucGFuZWwgPSBhd2FpdCBhdG9tLndvcmtzcGFjZS5hZGRNb2RhbFBhbmVsKHtcbiAgICAgICAgaXRlbTogdGhpcy5lbGVtZW50LFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYW5lbC5pc1Zpc2libGUoKSkge1xuICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wYW5lbC5zaG93KCk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2V0SXRlbXMgKGl0ZW1zKSB7XG4gICAgdGhpcy5pdGVtcyA9ICFpdGVtcyA/IFtdIDogaXRlbXMuaWRzLm1hcChpZCA9PiB7XG4gICAgICBjb25zdCBjYW5kaWRhdGUgPSBpdGVtcy5tYXBbaWRdO1xuICAgICAgaWYgKGNhbmRpZGF0ZS50eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5tb2RlbDtcbiAgICAgIH1cbiAgICB9KS5maWx0ZXIobW9kZWwgPT4gbW9kZWwpO1xuXG4gICAgdGhpcy51cGRhdGUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHsqfSBpdGVtIC0gZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge09iamVjdH0gQW4gSFRNTEVsZW1lbnRcbiAgICovXG4gIGVsZW1lbnRGb3JJdGVtIChpdGVtKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGl0ZW0gLSBkZXNjcmlwdGlvblxuICAgKi9cbiAgZGlkQ29uZmlybVNlbGVjdGlvbiAoaXRlbSkge1xuICAgIGRldmxvZygnZGlkQ29uZmlybVNlbGVjdGlvbicsIGl0ZW0pO1xuICAgIHRoaXMucGFuZWwuaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBkaWRDYW5jZWxTZWxlY3Rpb24gKCkge1xuICAgIGRldmxvZygnZGlkQ2FuY2VsU2VsZWN0aW9uJyk7XG4gICAgdGhpcy5wYW5lbC5oaWRlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGZvY3VzICgpIHtcbiAgICBkZXZsb2codGhpcyk7XG4gICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge09iamVjdH0gZGVzY3JpcHRpb25cbiAgICovXG4gIGFzeW5jIHVwZGF0ZSAocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgcmV0dXJuIGV0Y2gudXBkYXRlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnBhbmVsLmRlc3Ryb3koKTtcbiAgICBhd2FpdCBldGNoLmRlc3Ryb3kodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGVzY3JpcHRpb25cbiAgICovXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RMaXN0IHsuLi50aGlzfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TGlzdENvbnRhaW5lcjtcbiJdfQ==