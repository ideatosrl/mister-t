'use strict';

module.exports = {
  range
}

function range (date) {
  if (date.date) {
    return { from: date.date, to: date.date }
  }

  if (date[ 'date-period' ]) {
    return {
      from: date[ 'date-period' ].split('/')[ 0 ],
      to: date[ 'date-period' ].split('/')[ 1 ]
    }
  }

  throw "Unable to parse the date"
}