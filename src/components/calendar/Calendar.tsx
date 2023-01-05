import * as React from 'react';
import * as moment from 'moment';

interface CalendarProps {
  date: moment.Moment;
}

interface CalendarState {
  currentMonth: moment.Moment;
}

class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      currentMonth: moment(this.props.date).startOf('month')
    };
  }

  render() {
    return (
      <div>
        {this.renderMonthLabel()}
        {this.renderWeekdays()}
        {this.renderDays()}
      </div>
    );
  }

  renderMonthLabel() {
    const currentMonth = this.state.currentMonth;
    return (
      <div>
        {currentMonth.format('MMMM YYYY')}
      </div>
    );
  }

  renderWeekdays() {
    const weekdays = moment.weekdays();
    return (
      <div>
        {weekdays.map(weekday =>
          <div key={weekday}>{weekday}</div>
        )}
      </div>
    );
  }

  renderDays() {
    const currentMonth = this.state.currentMonth;
    const startOfMonth = moment(currentMonth).startOf('month');
    const endOfMonth = moment(currentMonth).endOf('month');

    const days = [];
    let day = startOfMonth;
    while (day <= endOfMonth) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }

    const weekdays = moment.weekdays();
    const rows = [];
    let cells = [];

    days.forEach((day) => {
      cells.push(<div key={day.toString()}>{moment(day).format('D')}</div>);
      if (moment(day).weekday() === 6) {
        rows.push(cells);
        cells = [];
      }
    });

    if (cells.length > 0) {
      rows.push(cells);
    }

    return (
      <div>
        {rows.map((row, i) =>
          <div key={i}>
            {row}
          </div>
        )}
      </div>
    );
  }
}
