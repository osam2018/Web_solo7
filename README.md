해당 프로젝트는 App과정 2명, Web과정 1명으로 3인팀으로써 개발할 계획이였는데 불가피하게 찢어지게 됨으로써 기존 계획했던 프로젝트에서 달력기능만을 구현하였음을 밝힙니다.
#######WEBSTORM에서는 구동되다가 구름에서는 구동이안되어 ZIP파일로 올려놨습니다. web(2).zip입니다.
#######vuetify를 이용하였습니다.
########################구동은 npm run dev를 이용하여 구동됩니다.##########################

groupscheduler폴더 	=> 구름에서 구동시키려고 만든 폴더
web(2)폴더 			=> 원본zip파일 압축해제한 폴더
UI폴더				=> 발사믹 캡쳐

1. 소속 : 육군 1야전군사령부 21사단 정보통신대대 일병 박영길
2. 계급 : 일병 ( 선발자 명단에는 이병으로 기재됨)
3. 프로젝트명 : Group Scheduler
4. 발사믹 주소 : https://balsamiq.cloud/sx5mn2q/ppojktx/rC927
5. 프로젝트 설명 : 다수의 사용자들로 부터 일정data를 입력받아 다수의 인원이 참여가능한 시간/기간을 실시간 업데이트를 통해 알려주는 GroupScheduler이다.
6. 프로젝트 계획 동기 : 기존에 동호회나 동아리에서 단체 일정을 만들 때 개개인의 스케쥴에 의해 적절한 시간대를 잡기에 어려움이 있었다. 이를 해결하기 위해 개개인의 일정을 종합한 뒤 다수가 참여가능한 시간대를 색상으로 구분해주어 단체약속을 잡기 좋은 날을  						알려주는 아이템을 만들고자 계획하였다.
6. 주요 완료 기능 : 달력 기능
					-쉬운 일정 입력,편집 
					-2가지 언어 지원
					-일/주/월/년단위 달력보기기능 지원
					-읽기전용모드 지원
					-다른날짜를 확인하다가 오늘날짜로 이동해주는 기능지원
					-일정 입력간에 발생주기, 중요도, 종류, 세부설명 작성가능
7. 미완료 기능 : 데이터를 입력받아 겹치는 일정 수에 비례, 색상으로 구분해주는 기능.
8. 향후 계획 :다수의 사용자로부터 데이터를 입력받아 기존 계획했던 약속잡기에 적절한 시간대를 찾아주는 기능을 완성할 계획입니다.
			 부 계획으로는 개인 일정을 입력받고 공통적으로 빈 시간을 찾아주는 BASE API를 개발한 후, 10명정도의 소규모 그룹들이 주/일단위 단체 일정을 만들 수 있는 Example app을 만든다.
			 종개발 목표는 SNS(Slack, Facebook, Kakaotalk)등과 연동이 가능하고 쌓인 개인데이터들에 접근할 수 있는 API를 제공해주는 서비스를 만드는 것이다.

# dayspan-vuetify

> A collection of components for Schedules and Calendars in DaySpan using Vuetify

This library strives to offer all the functionality any modern calendar app could support, and more. Not only can this be used for calendar apps, but any application where the user wishes to control when events should occur within a system.

[Click here for a full app example](https://clickermonkey.github.io/dayspan-vuetify/example/)

Every feature of the library can be toggled with local and global settings, and all text can be localized.

## Status

This library is nearing functional completion (documentation on every component, prop, event, slot, method will have to wait) but is still subject to the occasional small change in API.

[Current documentation](docs/README.md)

## Usage

Install with `npm install --save dayspan-vuetify`

**This library works best with Vuetify >= 1.1.9**

```javascript
import DaySpanVuetify from 'dayspan-vuetify'

Vue.use( DaySpanVuetify, {
  // options is vue definition, the resulting reactive component is stored in components as this.$dayspan or Vue.$dayspan
  data: {
    // data or computed to override
  },
  computed: {
    // data or computed to override
  },
  methods: {
    // methods to override
  }
});
```

To see what options can be passed to the plugin, [checkout this file](src/component.js).

Once done, you can access components like `ds-event`, `ds-calendar`, and `ds-calendar-app` from any component (they are registered globally).

## Example / Template

Checkout [dayspan-vuetify-example](https://github.com/ClickerMonkey/dayspan-vuetify-example) for an example of a calendar app which saves events to localStorage.

## Example Code

Install with `npm install --save dayspan-vuetify`

#### app.js
```javascript
import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### App.vue
```vue
<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app :calendar="calendar"></ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar } from 'dayspan';

export default {
  name: 'app',
  data: () => ({
    calendar: Calendar.months()
  })
}
</script>

<style>
body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
```

#### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>You Calendar App Title</title>
    <style> [v-cloak] { display: none; } </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files should be auto injected -->
  </body>
</html>
```

### Locales

This library supports multiple locales but comes only with [en-us/en](https://github.com/ClickerMonkey/dayspan-vuetify/blob/master/src/locales/en.js). The following code shows you how to add locales, changing the current locale, and updating a given locale:

```javascript
// You can access $dayspan via Vue.$dayspan or this.$dayspan inside a component.

$dayspan.setLocale('en'); // if en does not exist, this will have no affect
$dayspan.setLocale('fr', true); // true was passed, so if the locale does not exist an error is thrown
$dayspan.locales; // map of locale names to locale values

// A locale is really just an object that overrides the values you specify found in $dayspan. A locale does not need to specify all possible values, just ones that should be overriden when setLocale is called.

$dayspan.addLocale('es', {
  promptLabels: {
    // Are you sure you want to remove this event?
    actionRemove: '¿Estás seguro de que quieres eliminar este evento?'
  }
});

// Update locale (merge changes into locale)
$dayspan.updateLocale('en', {
  patterns: {
    lastDay: (day) => 'Final day of the month'
  }
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
