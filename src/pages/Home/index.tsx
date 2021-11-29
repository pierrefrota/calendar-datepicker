import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export const HomeScreen = () => {

    const monthsNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const daysNames = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    const [month, setMonth] = useState<number>();
    const [year, setYear] = useState<number>();

    const [firstDay, setFirstDay] = useState<number>(1);
    const [lastDay, setLastDay] = useState<number>(0);

    const [dayTables, setDayTables] = useState<any>([]);
    const [indexDays, setIndexDays] = useState<any>([]);

    // useEffect é executado assim que o componente é renderizado, parecido com o ngOnInit;

    useEffect(() => {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        getCalendarDays(month, year);
    }, []);

    const getPreviousMonth = (e: any) => {
        e.preventDefault();

        if ((month || month === 0) && year) {
            if (month === 0) {
                getCalendarDays(11, year - 1);
            } else {
                getCalendarDays(month - 1, year);
            }
        }
    }

    const getNextMonth = (e: any) => {
        e.preventDefault();
        
        if ((month || month === 0) && year) { 
            if (month === 11 ) {
                getCalendarDays(0, year + 1);
            } else {
                getCalendarDays(month + 1, year);
            }
        }
    }

    const getCalendarDays = (month: number, year: number) => {
        setMonth(month);
        setYear(year);

        let firstDayOfWeek = new Date(year, month, 1).getDay() - 1;
        let firstDayOfThisMonth = new Date(year, month, 1).getDate() - 1;
        let lastDayOfThisMonth = new Date(year, month + 1, 0).getDate();
        let daysOfMonth = [];
        let indexOfMonth = [];

        setFirstDay(firstDayOfThisMonth);
        setLastDay(lastDayOfThisMonth);

        for (let i = -firstDayOfWeek, index = 0; i < (42 - firstDayOfWeek); i++, index++) {
            let dt = new Date(year, month, i);

            daysOfMonth.push(dt.getDate());
            indexOfMonth.push(i);

        }
            setDayTables(daysOfMonth);
            setIndexDays(indexOfMonth);
        };

    return (
        <div className={styles.container}>
            <h1>Portal DatePicker</h1>
            <div className={styles.content}>
                <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                        <h2 id="month">{monthsNames[month? month : 0]}</h2>
                        <h2 id="year">{year}</h2>
                    </div>
                    
                    <div className={styles.calendarBody}>

                        <div className={styles.calendarContent}>
                            <div className={styles.calendarDaysWeek}>
                                {daysNames.map((day, index) => {
                                    <div className={styles.calendarDaysWeekItem}>{day}</div>
                                })}
                            </div>
                            <div className={styles.calendarDaysOfMonth}>
                                {dayTables.map((day: number, index: number) => {
                                    return (
                                        <div className={`${styles.calendarDaysOfMonthItem} ${indexDays[index] < firstDay + 1 || indexDays[index] > lastDay ? styles.lastOrNextMonthDay : 'não'}`} key={index}>
                                            <div className={styles.calendarDaysOfMonthItemDay}>{day}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={styles.calendarContent}>
                            <div className={styles.calendarDaysWeek}>
                                {daysNames.map((day, index) => {
                                    <div className={styles.calendarDaysWeekItem}>{day}</div>
                                })}
                            </div>
                            <div className={styles.calendarDaysOfMonth}>
                                {dayTables.map((day: number, index: number) => {
                                    return (
                                        <div className={`${styles.calendarDaysOfMonthItem} ${indexDays[index] < firstDay + 1 || indexDays[index] > lastDay ? styles.lastOrNextMonthDay : ''}`} key={index}>
                                            <div className={styles.calendarDaysOfMonthItemDay}>{day}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    
                    <div className="buttons">
                        <button onClick={(e) => getPreviousMonth(e) }>Anterior</button>
                        <button onClick={(e) => getNextMonth(e)}>Próximo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}