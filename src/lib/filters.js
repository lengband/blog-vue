import Vue from 'vue'
import moment from 'moment'

moment.defaultFormat = 'YYYY-MM-DD'

const timeFormat = time => {
  console.log(time, 'time')

  return moment(time).format()
}

Vue.filter('timeFormat', timeFormat)
