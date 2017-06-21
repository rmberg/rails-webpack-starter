
import angular from 'angular';
import templateString from './_widget.html';
import WidgetComponent from './widget.component';

export default angular.module('widget', []).component('widgetComponent', {
  template: templateString,
  controller: WidgetComponent
})
