
export default {
  promptLabels: {
    actionRemove: '일정을 제거하시겠습니까?',
    actionExclude: '일정을 제거하시겠습니까?',
    actionCancel: '일정을 취소하시겠습니까?',
    actionUncancel: '일정을 복구하시겠습니까?',
    actionSetStart: '일정을 처음으로 설정하시겠습니까?',
    actionSetEnd: '일정을 마지막으로 설정하시겠습니까?',
    actionMove: '일정을 옮기시겠습니까?',
    actionInclude: '일정을 추가하시겠습니까?',
    move: '일정을 옮기시겠습니까?',
    toggleAllDay: '설정을 변경하시겠습니까?',
    removeExistingTime: '모든 일정을 제거하시겠습니까?'
  },
  placeholder: {
    noTitle: '(무제)'
  },
  patterns: {
    lastDay: (day) => 'Last day of the month',
    lastDayOfMonth: (day) => 'Last day of ' + day.format('MMMM'),
    lastWeekday: (day) => 'Last ' + day.format('dddd') + ' in ' + day.format('MMMM')
  },
  colors: [
    {text: 'Red'},
    {text: 'Pink'},
    {text: 'Purple'},
    {text: 'Deep Purple'},
    {text: 'Indigo'},
    {text: 'Blue'},
    {text: 'Glue'},
    {text: 'Light Blue'},
    {text: 'Cyan'},
    {text: 'Teal'},
    {text: 'Green'},
    {text: 'Light Green'},
    {text: 'Lime'},
    {text: 'Yellow'},
    {text: 'Amber'},
    {text: 'Orange'},
    {text: 'Deep Orange'},
    {text: 'Brown'},
    {text: 'Blue Gray'},
    {text: 'Gray'},
    {text: 'Black'}
  ],
  icons: [
    {text: '알람'},
    {text: '별'},
    {text: '하트'},
    {text: '액션'},
    {text: '과제'},
    {text: '경고'},
    {text: '돈'},
    {text: '잔돈'},
    {text: '집'},
    {text: '재생'},
    {text: '이메일'},
    {text: '휴대전화'},
    {text: '차트'},
    {text: '바이킹'},
    {text: '여행'}
  ],
  defaults: {
    dsDay: {
      formats: {
        month: 'MMM'
      }
    },
    dsCalendarApp: {
      types: [
        {label: 'Day'},
        {label: 'Week'},
        {label: 'Month'},
        {label: 'Year'},
        {label: 'Schedule'},
        {label: '4 days'}
      ],
      formats: {
        today: 'dddd, MMMM D',
        xs: 'MMM'
      },
      labels: {
        next: (type) => type ? 'next ' + type.label.toLowerCase() : 'next',
        prev: (type) => type ? 'previous ' + type.label.toLowerCase() : 'previous ',
        moveCancel: '일정 이동 취소',
        moveSingleEvent: '일정 이동',
        moveOccurrence: '일정 이동',
        moveAll: '모든 일정 일괄 이동',
        moveDuplicate: '일정 추가',
        promptConfirm: '예',
        promptCancel: '아니오',
        today: '오늘'
      }
    },
    dsAgendaEvent: {
      formats: {
        firstLine: 'ddd',
        secondLine: 'MMM Do',
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        allDay: '매일',
        options: '옵션',
        close: '닫기',
        day: ['일', '일'],
        days: ['일', '일'],
        minute: ['분', '분'],
        minutes: ['분', '분'],
        hour: ['시간', '시간'],
        hours: ['시간', '시간'],
        week: ['주', '주'],
        weeks: ['주', '주'],
        free: '보통',
        busy: '중요'
      }
    },
    dsCalendarEventChip: {
      formats: {
        fullDay: 'ddd MMM Do YYYY',
        timed: 'ddd MMM Do YYYY'
      }
    },
    dsCalendarEventPopover: {
      formats: {
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        allDay: '매일',
        options: '설정',
        close: '닫기',
        day: ['일', '일'],
        days: ['일', '일'],
        minute: ['분', '분'],
        minutes: ['분', '분'],
        hour: ['시간', '시간'],
        hours: ['시간', '시간'],
        week: ['주', '주'],
        weeks: ['주', '주'],
        free: '보통',
        busy: '중요'
      }
    },
    dsCalendarEventCreatePopover: {
      formats: {
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        title: '제목 추가',
        allDay: '매일',
        close: '닫기',
        save: '저장',
        day: ['day', 'days'],
        days: ['day', 'days'],
        minute: ['minute', 'minutes'],
        minutes: ['minute', 'minutes'],
        hour: ['hour', 'hours'],
        hours: ['hour', 'hours'],
        week: ['week', 'weeks'],
        weeks: ['week', 'weeks'],
        busy: '바쁨',
        free: '보통',
        location: '위치 추가',
        description: '설명 추가',
        calendar: '메모',
      },
      busyOptions: [
        {text: '중요'},
        {text: '보통'}
      ]
    },
    dsSchedule: {
      labels: {
        editCustom: '수정'
      }
    },
    dsEvent: {
      labels: {
        cancel: '일정 변경 취소',
        save: '저장',
        title: '제목',
        exclusions: 'These are events or spans of time where a normally occurring event was excluded from the schedule. Events are excluded here if an event occurrence is moved.',
        inclusions: 'These are events or spans of time where events were added outside the normally occurring schedule. Events are added here if an event occurrence is moved.',
        cancelled: '이것들은 취소된 일정들입니다.',
        edit: '일정 수정',
        add: '일정 추가',
        location: '위치 추가',
        description: '설명 추가',
        calendar: '메모',
        tabs: {
          details: '세부사항',
          forecast: '예보',
          removed: '제거됨',
          added: '추가됨',
          cancelled: '취소됨'
        }
      },
      busyOptions: [
        {text: '중요'},
        {text: '보통'}
      ]
    },
    dsScheduleActions: {
      labels: {
        remove: '일정 일괄 제거',
        exclude: '일정  제거',
        cancel: '일정 취소',
        uncancel: '일정 복구',
        move: '일정 이동',
        include: '일정 추가',
        setStart: '첫 일정으로 설정',
        setEnd: '마지막 일정으로 설정',
        pickerOk: '확인',
        pickerCancel: '취소'
      }
    },
    dsScheduleForecast: {
      labels: {
        prefix: 'The forecast shows previous & next',
        suffix: 'event occurrences within a years time.'
      }
    },
    dsScheduleFrequencyDay: {
      labels: {
        type: 'Days'
      },
      options: [
        {text: 'Any day'},
        {text: 'On the following days...'},
        {text: 'Every _ days starting on _'}
      ],
      types: [
        {text: 'Day of the month'},
        {text: 'Last day of the month'},
        {text: 'Day of the year'}
      ]
    },
    dsScheduleFrequencyDayOfWeek: {
      weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      labels: {
        type: 'Days of week'
      },
      options: [
        {text: 'Any day of the week'},
        {text: 'On the following days of the week...'},
        {text: 'Every _ weekday starting on _'},
        {text: 'Weekends'},
        {text: 'Weekdays'}
      ]
    },
    dsScheduleFrequencyMonth: {
      labels: {
        type: 'Months'
      },
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      options: [
        {text: 'Any month'},
        {text: 'On the following months...'},
        {text: 'Every _ months starting on _'}
      ]
    },

    dsScheduleFrequencyWeek: {
      labels: {
        type: 'Weeks'
      },
      options: [
        {text: 'Any week'},
        {text: 'On the following weeks...'},
        {text: 'Every _ weeks starting on _'}
      ],
      types: [
        {text: 'Week of the month (first week has a Thursday)'},
        {text: 'Weekspan of the month (starts on first day of month)'},
        {text: 'Full week of the month (0th = the week before if any)'},
        {text: 'Last weekspan of the month (starts on last day of month)'},
        {text: 'Last full week of the month (0th = the week after if any)'},
        {text: 'Week of the year (first week has a Thursday)'},
        {text: 'Weekspan of the year (starts on first day of year)'},
        {text: 'Full week of the year (0th = the week before if any)'},
        {text: 'Last weekspan of the year (starts on last day of year)'},
        {text: 'Last full week of the year (0th = the week after if any)'}
      ]
    },

    dsScheduleFrequencyYear: {
      labels: {
        type: 'Years'
      },
      options: [
        {text: 'Any year'},
        {text: 'On the following years...'},
        {text: 'Every _ years starting on _'}
      ]
    },

    dsScheduleSpan: {
      labels: {
        startless: '부터',
        endless: '까지'
      },
      formats: {
        start: 'MMMM Do, YYYY',
        end: 'MMMM Do, YYYY'
      }
    },

    dsScheduleTime: {
      labels: {
        remove: '일정 제거',
        add: '일정 추가'
      }
    },

    dsScheduleTimes: {
      labels: {
        all: '매일',
        minute: '분',
        minutes: '분',
        hour: '시',
        hours: '시간',
        day: '일',
        days: '일',
        week: '주',
        weeks: '주',
        month: '월',
        months: '달'
      }
    },

    dsScheduleType: {
      formats: {
        date: 'LL'
      }
    },

    dsScheduleTypeCustomDialog: {
      labels: {
        save: '저장',
        cancel: '취소'
      }
    },

    dsWeekDayHeader: {
      formats: {
        weekday: 'ddd'
      }
    },

    dsWeeksView: {
      weekdays: ['일', '월', '화', '수', '목', '금', '토']
    },

    dsDaysView: {
      hours: [
        '    ', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
        '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
      ]
    },

    dsDayPicker: {
      weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      labels: {
        prevMonth: '이전 달',
        nextMonth: '다음 달'
      }
    }
  }
}
