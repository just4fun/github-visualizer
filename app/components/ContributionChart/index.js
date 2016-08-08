import React from 'react';
import * as d3 from 'd3';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import styles from './styles.css';

export default class ContributionChart extends React.Component {
  getMaxCommitCountPerDay(weeks) {
    if (weeks.length === 0) { return 0; }

    let days = weeks.reduce((sum, currentWeek) => sum.concat(currentWeek.days), []);
    return Math.max(...days);
  }

  render() {
    let { isFetching, data, error } = this.props.commits;
    let weeks = data || [];

    const dimension = 13;
    const maxDomain = this.getMaxCommitCountPerDay(weeks);

    const linearScale = d3.scaleLinear()
                          .domain([0, maxDomain])
                          .range([0, 4]);

    return (
      <div>
        {isFetching && <Loading />}
        {error && <ErrorMessage error={error} />}
        {!isFetching && !error &&
          <svg className={styles['contribution-chart']}>
            <g transform="translate(20, 20)">
              {weeks.map((week, weekIndex) => {
                return (
                  <g key={weekIndex} transform={`translate(${weekIndex * dimension}, 0)`}>
                    {week.days.map((day, dayIndex) => {
                      return (
                        <rect
                          key={dayIndex}
                          className={styles[`commit-frequence-${Math.round(linearScale(day))}`]}
                          y={`${dayIndex * dimension}`}
                          width="11"
                          height="11"
                        />
                      );
                    })}
                  </g>
                );
              })}
            </g>
          </svg>
        }
      </div>
    );
  }
}
