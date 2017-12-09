Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

var _devlog = require('./../devlog');

var _devlog2 = _interopRequireDefault(_devlog);

var _base = require('./../../constants/base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class representing the Database
 */
let Package = (_temp = _class = class Package {

  /**
   * description
   *
   * @returns {Object} description
   */
  getPackage() {
    return atom.config.get(Package.config) ? undefined : atom.packages.getLoadedPackage(Package.packageName);
  }

  /**
   * description
   *
   * @returns {Object} description
   */
  save() {
    (0, _devlog2.default)(`save ${Package.packageName}`);
    const pkg = this.getPackage();

    if (!pkg) {
      return {};
    }

    return pkg.serialize();
  }

  /**
   * description
   *
   * @param {Object} state - description
   * @returns {Promise} description
   */
  load(state) {
    return new Promise(resolve => {

      (0, _devlog2.default)(`load ${Package.packageName}`);
      const pkg = this.getPackage();

      if (!pkg || !pkg.mainActivated || !state) {
        return resolve();
      }

      pkg.mainModule.findHistory.items = state.findHistory;
      pkg.mainModule.findHistory.length = state.findHistory.length;

      pkg.mainModule.findOptions.caseSensitive = state.findOptions.caseSensitive;
      pkg.mainModule.findOptions.findPattern = state.findOptions.findPattern;
      pkg.mainModule.findOptions.inCurrentSelection = state.findOptions.inCurrentSelection;
      pkg.mainModule.findOptions.leadingContextLineCount = state.findOptions.leadingContextLineCount;
      pkg.mainModule.findOptions.pathsPattern = state.findOptions.pathsPattern;
      pkg.mainModule.findOptions.replacePattern = state.findOptions.replacePattern;
      pkg.mainModule.findOptions.trailingContextLineCount = state.findOptions.trailingContextLineCount;
      pkg.mainModule.findOptions.useRegex = state.findOptions.useRegex;
      pkg.mainModule.findOptions.wholeWord = state.findOptions.wholeWord;

      pkg.mainModule.pathsHistory.items = state.pathsHistory;
      pkg.mainModule.pathsHistory.length = state.pathsHistory.length;

      pkg.mainModule.replaceHistory.items = state.replaceHistory;
      pkg.mainModule.replaceHistory.length = state.replaceHistory.length;

      pkg.mainModule.resultsModel.shouldRerunSearch();

      resolve();
    });
  }
}, _class.packageName = 'find-and-replace', _class.config = `${_base.PLUGIN_NAME}.packages.findAndReplace`, _temp);
exports.default = Package;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9wYWNrYWdlcy9maW5kLWFuZC1yZXBsYWNlLmpzIl0sIm5hbWVzIjpbIlBhY2thZ2UiLCJnZXRQYWNrYWdlIiwiYXRvbSIsImNvbmZpZyIsImdldCIsInVuZGVmaW5lZCIsInBhY2thZ2VzIiwiZ2V0TG9hZGVkUGFja2FnZSIsInBhY2thZ2VOYW1lIiwic2F2ZSIsInBrZyIsInNlcmlhbGl6ZSIsImxvYWQiLCJzdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFpbkFjdGl2YXRlZCIsIm1haW5Nb2R1bGUiLCJmaW5kSGlzdG9yeSIsIml0ZW1zIiwibGVuZ3RoIiwiZmluZE9wdGlvbnMiLCJjYXNlU2Vuc2l0aXZlIiwiZmluZFBhdHRlcm4iLCJpbkN1cnJlbnRTZWxlY3Rpb24iLCJsZWFkaW5nQ29udGV4dExpbmVDb3VudCIsInBhdGhzUGF0dGVybiIsInJlcGxhY2VQYXR0ZXJuIiwidHJhaWxpbmdDb250ZXh0TGluZUNvdW50IiwidXNlUmVnZXgiLCJ3aG9sZVdvcmQiLCJwYXRoc0hpc3RvcnkiLCJyZXBsYWNlSGlzdG9yeSIsInJlc3VsdHNNb2RlbCIsInNob3VsZFJlcnVuU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7OztJQUdNQSxPLHFCQUFOLE1BQU1BLE9BQU4sQ0FBYzs7QUFLWjs7Ozs7QUFLQUMsZUFBYztBQUNaLFdBQU9DLEtBQUtDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkosUUFBUUcsTUFBeEIsSUFBa0NFLFNBQWxDLEdBQ0xILEtBQUtJLFFBQUwsQ0FBY0MsZ0JBQWQsQ0FBK0JQLFFBQVFRLFdBQXZDLENBREY7QUFFRDs7QUFFRDs7Ozs7QUFLQUMsU0FBUTtBQUNOLDBCQUFRLFFBQU9ULFFBQVFRLFdBQVksRUFBbkM7QUFDQSxVQUFNRSxNQUFNLEtBQUtULFVBQUwsRUFBWjs7QUFFQSxRQUFJLENBQUNTLEdBQUwsRUFBVTtBQUNSLGFBQU8sRUFBUDtBQUNEOztBQUVELFdBQU9BLElBQUlDLFNBQUosRUFBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQUMsT0FBTUMsS0FBTixFQUFhO0FBQ1gsV0FBTyxJQUFJQyxPQUFKLENBQVlDLFdBQVc7O0FBRTVCLDRCQUFRLFFBQU9mLFFBQVFRLFdBQVksRUFBbkM7QUFDQSxZQUFNRSxNQUFNLEtBQUtULFVBQUwsRUFBWjs7QUFFQSxVQUFJLENBQUNTLEdBQUQsSUFBUSxDQUFDQSxJQUFJTSxhQUFiLElBQThCLENBQUNILEtBQW5DLEVBQTBDO0FBQ3hDLGVBQU9FLFNBQVA7QUFDRDs7QUFFREwsVUFBSU8sVUFBSixDQUFlQyxXQUFmLENBQTJCQyxLQUEzQixHQUFtQ04sTUFBTUssV0FBekM7QUFDQVIsVUFBSU8sVUFBSixDQUFlQyxXQUFmLENBQTJCRSxNQUEzQixHQUFvQ1AsTUFBTUssV0FBTixDQUFrQkUsTUFBdEQ7O0FBRUFWLFVBQUlPLFVBQUosQ0FBZUksV0FBZixDQUNHQyxhQURILEdBQ21CVCxNQUFNUSxXQUFOLENBQWtCQyxhQURyQztBQUVBWixVQUFJTyxVQUFKLENBQWVJLFdBQWYsQ0FDR0UsV0FESCxHQUNpQlYsTUFBTVEsV0FBTixDQUFrQkUsV0FEbkM7QUFFQWIsVUFBSU8sVUFBSixDQUFlSSxXQUFmLENBQ0dHLGtCQURILEdBQ3dCWCxNQUFNUSxXQUFOLENBQWtCRyxrQkFEMUM7QUFFQWQsVUFBSU8sVUFBSixDQUFlSSxXQUFmLENBQ0dJLHVCQURILEdBQzZCWixNQUFNUSxXQUFOLENBQWtCSSx1QkFEL0M7QUFFQWYsVUFBSU8sVUFBSixDQUFlSSxXQUFmLENBQ0dLLFlBREgsR0FDa0JiLE1BQU1RLFdBQU4sQ0FBa0JLLFlBRHBDO0FBRUFoQixVQUFJTyxVQUFKLENBQWVJLFdBQWYsQ0FDR00sY0FESCxHQUNvQmQsTUFBTVEsV0FBTixDQUFrQk0sY0FEdEM7QUFFQWpCLFVBQUlPLFVBQUosQ0FBZUksV0FBZixDQUNHTyx3QkFESCxHQUM4QmYsTUFBTVEsV0FBTixDQUFrQk8sd0JBRGhEO0FBRUFsQixVQUFJTyxVQUFKLENBQWVJLFdBQWYsQ0FDR1EsUUFESCxHQUNjaEIsTUFBTVEsV0FBTixDQUFrQlEsUUFEaEM7QUFFQW5CLFVBQUlPLFVBQUosQ0FBZUksV0FBZixDQUNHUyxTQURILEdBQ2VqQixNQUFNUSxXQUFOLENBQWtCUyxTQURqQzs7QUFHQXBCLFVBQUlPLFVBQUosQ0FBZWMsWUFBZixDQUE0QlosS0FBNUIsR0FBb0NOLE1BQU1rQixZQUExQztBQUNBckIsVUFBSU8sVUFBSixDQUFlYyxZQUFmLENBQTRCWCxNQUE1QixHQUFxQ1AsTUFBTWtCLFlBQU4sQ0FBbUJYLE1BQXhEOztBQUVBVixVQUFJTyxVQUFKLENBQWVlLGNBQWYsQ0FBOEJiLEtBQTlCLEdBQXNDTixNQUFNbUIsY0FBNUM7QUFDQXRCLFVBQUlPLFVBQUosQ0FBZWUsY0FBZixDQUE4QlosTUFBOUIsR0FBdUNQLE1BQU1tQixjQUFOLENBQXFCWixNQUE1RDs7QUFFQVYsVUFBSU8sVUFBSixDQUFlZ0IsWUFBZixDQUE0QkMsaUJBQTVCOztBQUVBbkI7QUFDRCxLQXhDTSxDQUFQO0FBeUNEO0FBL0VXLEMsU0FFTFAsVyxHQUFjLGtCLFNBQ2RMLE0sR0FBVSxHQUFELGlCQUFlLDBCO2tCQStFbEJILE8iLCJmaWxlIjoiZmluZC1hbmQtcmVwbGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXZsb2cgZnJvbSAnLi8uLi9kZXZsb2cnO1xuaW1wb3J0IHsgUExVR0lOX05BTUUgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cy9iYXNlJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIERhdGFiYXNlXG4gKi9cbmNsYXNzIFBhY2thZ2Uge1xuXG4gIHN0YXRpYyBwYWNrYWdlTmFtZSA9ICdmaW5kLWFuZC1yZXBsYWNlJztcbiAgc3RhdGljIGNvbmZpZyA9IGAke1BMVUdJTl9OQU1FfS5wYWNrYWdlcy5maW5kQW5kUmVwbGFjZWA7XG5cbiAgLyoqXG4gICAqIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGRlc2NyaXB0aW9uXG4gICAqL1xuICBnZXRQYWNrYWdlICgpIHtcbiAgICByZXR1cm4gYXRvbS5jb25maWcuZ2V0KFBhY2thZ2UuY29uZmlnKSA/IHVuZGVmaW5lZCA6XG4gICAgICBhdG9tLnBhY2thZ2VzLmdldExvYWRlZFBhY2thZ2UoUGFja2FnZS5wYWNrYWdlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGVzY3JpcHRpb25cbiAgICovXG4gIHNhdmUgKCkge1xuICAgIGRldmxvZyhgc2F2ZSAke1BhY2thZ2UucGFja2FnZU5hbWV9YCk7XG4gICAgY29uc3QgcGtnID0gdGhpcy5nZXRQYWNrYWdlKCk7XG5cbiAgICBpZiAoIXBrZykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiBwa2cuc2VyaWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9IGRlc2NyaXB0aW9uXG4gICAqL1xuICBsb2FkIChzdGF0ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgZGV2bG9nKGBsb2FkICR7UGFja2FnZS5wYWNrYWdlTmFtZX1gKTtcbiAgICAgIGNvbnN0IHBrZyA9IHRoaXMuZ2V0UGFja2FnZSgpO1xuXG4gICAgICBpZiAoIXBrZyB8fCAhcGtnLm1haW5BY3RpdmF0ZWQgfHwgIXN0YXRlKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRIaXN0b3J5Lml0ZW1zID0gc3RhdGUuZmluZEhpc3Rvcnk7XG4gICAgICBwa2cubWFpbk1vZHVsZS5maW5kSGlzdG9yeS5sZW5ndGggPSBzdGF0ZS5maW5kSGlzdG9yeS5sZW5ndGg7XG5cbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRPcHRpb25zXG4gICAgICAgIC5jYXNlU2Vuc2l0aXZlID0gc3RhdGUuZmluZE9wdGlvbnMuY2FzZVNlbnNpdGl2ZTtcbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRPcHRpb25zXG4gICAgICAgIC5maW5kUGF0dGVybiA9IHN0YXRlLmZpbmRPcHRpb25zLmZpbmRQYXR0ZXJuO1xuICAgICAgcGtnLm1haW5Nb2R1bGUuZmluZE9wdGlvbnNcbiAgICAgICAgLmluQ3VycmVudFNlbGVjdGlvbiA9IHN0YXRlLmZpbmRPcHRpb25zLmluQ3VycmVudFNlbGVjdGlvbjtcbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRPcHRpb25zXG4gICAgICAgIC5sZWFkaW5nQ29udGV4dExpbmVDb3VudCA9IHN0YXRlLmZpbmRPcHRpb25zLmxlYWRpbmdDb250ZXh0TGluZUNvdW50O1xuICAgICAgcGtnLm1haW5Nb2R1bGUuZmluZE9wdGlvbnNcbiAgICAgICAgLnBhdGhzUGF0dGVybiA9IHN0YXRlLmZpbmRPcHRpb25zLnBhdGhzUGF0dGVybjtcbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRPcHRpb25zXG4gICAgICAgIC5yZXBsYWNlUGF0dGVybiA9IHN0YXRlLmZpbmRPcHRpb25zLnJlcGxhY2VQYXR0ZXJuO1xuICAgICAgcGtnLm1haW5Nb2R1bGUuZmluZE9wdGlvbnNcbiAgICAgICAgLnRyYWlsaW5nQ29udGV4dExpbmVDb3VudCA9IHN0YXRlLmZpbmRPcHRpb25zLnRyYWlsaW5nQ29udGV4dExpbmVDb3VudDtcbiAgICAgIHBrZy5tYWluTW9kdWxlLmZpbmRPcHRpb25zXG4gICAgICAgIC51c2VSZWdleCA9IHN0YXRlLmZpbmRPcHRpb25zLnVzZVJlZ2V4O1xuICAgICAgcGtnLm1haW5Nb2R1bGUuZmluZE9wdGlvbnNcbiAgICAgICAgLndob2xlV29yZCA9IHN0YXRlLmZpbmRPcHRpb25zLndob2xlV29yZDtcblxuICAgICAgcGtnLm1haW5Nb2R1bGUucGF0aHNIaXN0b3J5Lml0ZW1zID0gc3RhdGUucGF0aHNIaXN0b3J5O1xuICAgICAgcGtnLm1haW5Nb2R1bGUucGF0aHNIaXN0b3J5Lmxlbmd0aCA9IHN0YXRlLnBhdGhzSGlzdG9yeS5sZW5ndGg7XG5cbiAgICAgIHBrZy5tYWluTW9kdWxlLnJlcGxhY2VIaXN0b3J5Lml0ZW1zID0gc3RhdGUucmVwbGFjZUhpc3Rvcnk7XG4gICAgICBwa2cubWFpbk1vZHVsZS5yZXBsYWNlSGlzdG9yeS5sZW5ndGggPSBzdGF0ZS5yZXBsYWNlSGlzdG9yeS5sZW5ndGg7XG5cbiAgICAgIHBrZy5tYWluTW9kdWxlLnJlc3VsdHNNb2RlbC5zaG91bGRSZXJ1blNlYXJjaCgpO1xuXG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZTtcbiJdfQ==