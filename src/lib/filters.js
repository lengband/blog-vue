import Vue from 'vue'
import moment from 'moment'

moment.defaultFormat = 'YYYY-MM-DD'

const timeFormat = time => moment(time).format()

Vue.filter('timeFormat', timeFormat)
